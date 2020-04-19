import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private studentUrl = 'http://localhost:8080/api/test/courses';
  private inscrutorUrl = 'http://localhost:8080/api/test/insctructorBoard';

  constructor(private http: HttpClient) {

  }

  getInsctructorBoard(): Observable<string> {
    return this.http.get(this.inscrutorUrl , {responseType :"text"});
  }

  getStudentCourses(): Observable<string> {
    return this.http.get(this.studentUrl,{responseType :"text"});
  }
}
