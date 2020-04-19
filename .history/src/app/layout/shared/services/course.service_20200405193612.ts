import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewCourse } from 'src/models/newCourse';
import { Observable, observable, of } from 'rxjs';
import { CourseSubscription } from '../model/courseSubscription';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public BaseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  public getAllCourses(): Observable<any> {
    return this.http.get(this.BaseUrl + '/training/findAllTraining');
  }

  public addCourse(formData: FormData, userID: number): Observable<any> {
    return this.http.post(this.BaseUrl + '/training/placeTrail/' + userID, formData);
  }

  public subscribeToCourse(subscription: CourseSubscription): Observable<any> {
    return this.http.post(this.BaseUrl + '/inscription/add', subscription);
  }

  public getCourseById(courseId: number) {
    return this.http.get(this.BaseUrl + '/training/find' + courseId);
  }

  public staticCourse(): Observable<any> {
    return of({
      "id": 1,
      "trainingName": "werwq",
      "image": "",
      "ritme": "kkkk",
      "etablissement": "gggggggggggggg",
      "nombreofhours": 23,
      "nbrparticipant": 30,
      "description": "hhhhhhhhhh",
      "startdate": "2020-06-30T18:51:17.000+0000",
      "endDate": "2020-03-30T18:51:17.000+0000",
      "preRequests": [
        "piece1",
        "piece2"
      ],
      "maxSubscribers": 50,
      "plan": [
        {
          "id": 1,
          "planName": "fr",
          "duration": "23",
          "description": "hhhhhhhhhhhhhhhhhhhhh",
          "startdate": null,
          "enddate": null,
          "price": 59.0
        },
        {
          "id": 2,
          "planName": "br",
          "duration": "25",
          "description": "hhhhhhhhhhhhhhhh",
          "startdate": "2020-03-30T18:38:41.000+0000",
          "enddate": "2020-03-30T18:38:41.000+0000",
          "price": 30.0
        }
      ]
    })
  }

}
