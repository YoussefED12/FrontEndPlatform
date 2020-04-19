import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewCourse } from 'src/models/newCourse';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public BaseUrl = 'http://localhost:9090';
  public sourse = [
    {
        "id": 1,
        "trainingName": "testyou",
        "image": "AQECAgU=",
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
                "price": 50.0
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
    },
    {
        "id": 2,
        "trainingName": "testyou",
        "image": "AQECAgU=",
        "ritme": "kkkk",
        "etablissement": "gggggggggggggg",
        "nombreofhours": 23,
        "nbrparticipant": 30,
        "description": "hhhhhhhhhh",
        "startdate": "2020-02-20T00:00:00.000+0000",
        "endDate": "2020-03-30T18:51:17.000+0000",
        "preRequests": [
            "piece1",
            "piece2"
        ],
        "maxSubscribers": 50,
        "plan": [
            {
                "id": 3,
                "planName": "fr",
                "duration": "23",
                "description": "hhhhhhhhhhhhhhhhhhhhh",
                "startdate": null,
                "enddate": null,
                "price": 50.0
            },
            {
                "id": 4,
                "planName": "br",
                "duration": "25",
                "description": "hhhhhhhhhhhhhhhh",
                "startdate": "2020-03-30T18:38:41.000+0000",
                "enddate": "2020-03-30T18:38:41.000+0000",
                "price": 30.0
            }
        ]
    },
    {
        "id": 3,
        "trainingName": "testyou",
        "image": "AQECAgU=",
        "ritme": "kkkk",
        "etablissement": "gggggggggggggg",
        "nombreofhours": 23,
        "nbrparticipant": 30,
        "description": "hhhhhhhhhh",
        "startdate": "2020-04-20T00:00:00.000+0000",
        "endDate": "2020-03-30T18:51:17.000+0000",
        "preRequests": [
            "piece1",
            "piece2"
        ],
        "maxSubscribers": 50,
        "plan": [
            {
                "id": 5,
                "planName": "fr",
                "duration": "23",
                "description": "hhhhhhhhhhhhhhhhhhhhh",
                "startdate": null,
                "enddate": null,
                "price": 50.0
            },
            {
                "id": 6,
                "planName": "br",
                "duration": "25",
                "description": "hhhhhhhhhhhhhhhh",
                "startdate": "2020-03-30T18:38:41.000+0000",
                "enddate": "2020-03-30T18:38:41.000+0000",
                "price": 30.0
            }
        ]
    },
    {
        "id": 4,
        "trainingName": "waw",
        "image": "AQECAgU=",
        "ritme": "kkkk",
        "etablissement": "gggggggggggggg",
        "nombreofhours": 23,
        "nbrparticipant": 30,
        "description": "hhhhhhhhhh",
        "startdate": "2020-04-25T00:00:00.000+0000",
        "endDate": "2020-03-30T18:51:17.000+0000",
        "preRequests": [
            "piece1",
            "piece2"
        ],
        "maxSubscribers": 50,
        "plan": [
            {
                "id": 7,
                "planName": "fr",
                "duration": "23",
                "description": "hhhhhhhhhhhhhhhhhhhhh",
                "startdate": null,
                "enddate": null,
                "price": 50.0
            },
            {
                "id": 8,
                "planName": "br",
                "duration": "25",
                "description": "hhhhhhhhhhhhhhhh",
                "startdate": "2020-03-30T18:38:41.000+0000",
                "enddate": "2020-03-30T18:38:41.000+0000",
                "price": 30.0
            }
        ]
    },
    {
        "id": 5,
        "trainingName": "Java",
        "image": "AQECAgU=",
        "ritme": "Hh",
        "etablissement": "gggggggggggggg",
        "nombreofhours": 23,
        "nbrparticipant": 30,
        "description": "hhhhhhhhhh",
        "startdate": "2020-04-25T00:00:00.000+0000",
        "endDate": "2020-03-30T18:51:17.000+0000",
        "preRequests": [
            "piece1",
            "piece2"
        ],
        "maxSubscribers": 50,
        "plan": [
            {
                "id": 9,
                "planName": "Intiation",
                "duration": "23",
                "description": "hhhhhhhhhhhhhhhhhhhhh",
                "startdate": null,
                "enddate": null,
                "price": 50.0
            },
            {
                "id": 10,
                "planName": "Avance",
                "duration": "25",
                "description": "hhhhhhhhhhhhhhhh",
                "startdate": "2020-03-30T18:38:41.000+0000",
                "enddate": "2020-03-30T18:38:41.000+0000",
                "price": 30.0
            }
        ]
    },
    {
        "id": 6,
        "trainingName": "Cours rapide",
        "image": "AQECAgU=",
        "ritme": "Hh",
        "etablissement": "test",
        "nombreofhours": 23,
        "nbrparticipant": 30,
        "description": "nice",
        "startdate": "2020-04-23T00:00:00.000+0000",
        "endDate": "2020-03-30T18:51:17.000+0000",
        "preRequests": [
            "piece1",
            "piece2"
        ],
        "maxSubscribers": 50,
        "plan": [
            {
                "id": 11,
                "planName": "fast",
                "duration": "23",
                "description": "test",
                "startdate": null,
                "enddate": null,
                "price": 50.0
            },
            {
                "id": 12,
                "planName": "moost",
                "duration": "25",
                "description": "frrrrrrr",
                "startdate": "2020-03-30T00:00:00.000+0000",
                "enddate": "2020-03-30T00:00:00.000+0000",
                "price": 30.0
            },
            {
                "id": 13,
                "planName": "Avance",
                "duration": "25",
                "description": "frrrrrrr",
                "startdate": "2020-03-30T00:00:00.000+0000",
                "enddate": "2020-03-30T00:00:00.000+0000",
                "price": 30.0
            }
        ]
    }
]

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
