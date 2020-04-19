import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewCourse } from "src/models/newCourse";
import { Observable, observable, of } from "rxjs";
import { CourseSubscription } from "../model/courseSubscription";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  public BaseUrl = "http://localhost:9090";

  constructor(private http: HttpClient) {}

  public getAllCourses(): Observable<any> {
    return this.http.get(this.BaseUrl + "/training/findAllTraining");
  }

  public addCourse(formData: FormData, userID: number): Observable<any> {
    return this.http.post(
      this.BaseUrl + "/training/placeTrail/" + userID,
      formData
    );
  }

  public subscribeToCourse(subscription: CourseSubscription): Observable<any> {
    return this.http.post(this.BaseUrl + "/inscription/add", subscription);
  }

  public getCourseById(courseId: number) {
    return this.http.get(this.BaseUrl + "/training/find/" + courseId);
  }

  public getinstructorCourses(id: number): Observable<any> {
    return this.http.get(this.BaseUrl + "/findTrainingByidInstructor/" + id);
  }

  public getStudentCourses(id: number): Observable<any> {
    return this.http.get(this.BaseUrl + "");
  }
  public unSubscribeFromCourse(id: number): Observable<any> {
    return this.http.get(this.BaseUrl + "");
  }

  public startCourse(id: number) {
    return this.http.get(this.BaseUrl + "");
  }
}
