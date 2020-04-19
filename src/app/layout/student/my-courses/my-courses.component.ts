import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../shared/services/course.service';
import { Course } from '../../shared/model/course';
import { TokenStorageService } from 'src/app/authentication/token storage/token-storage.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  public courses = new Array<Course>();
  searchText;
  constructor(private service: CourseService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fetchData() ;
  }

  fetchData(){
    this.service.getStudentCourses(Number.parseInt(this.tokenStorage.getUserId())).subscribe(
      courses => { this.courses = courses; }
    );
  }

  delete(id: number) {
    this.service.deleteSubscription(id, Number.parseInt(this.tokenStorage.getUserId())).subscribe(
      Response =>{
        alert("success");
        this.fetchData();
      },
      error => {
        alert("failure");
      }
    );
  }
}
