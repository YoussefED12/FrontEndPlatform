import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewCourse } from 'src/models/newCourse';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public BaseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  public getAllCourses() : Observable<any> {
    return this.http.get(this.BaseUrl + '/training/findAllTraining');
  }

  public addCourse(course: NewCourse): Observable<any> {
    return this.http.post(this.BaseUrl + '/training/placeTrail', course);
  }

  public subscribeToCourse() : Observable<any>{
    return of([1,2,3,4,5]);
  }

}
