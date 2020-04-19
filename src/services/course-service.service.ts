import { Injectable } from '@angular/core';
import { NewCourse } from 'src/models/newCourse';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { httpInterceptorProviders } from 'src/app/authentication/Interceptors/auth-interceptor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {


  coursUrl ="http://localhost:8080/api/saveCourse" ;

  constructor(private http : HttpClient) { }

  saveCourse(file: File ,  course : NewCourse): Observable<any> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('user', JSON.stringify(course) );

    const req = new HttpRequest('POST', '/post', formdata, {
      reportProgress: true,
    });

    return this.http.request(req);
  }
}
