import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/model/course';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public size = new Array(6);
  public courses = new Array<Course>();

  constructor(private service : CourseService) { }

  ngOnInit() {
    this.fetchLocalCourses();
    console.log(this.courses);
    
  }


  fetchLocalCourses() {
    this.service.getAllCourses().subscribe((courses : Array<any>) =>{
      this.courses = courses;
      this.courses.forEach(cours => {
        cours.image ='data:image/jpeg;base64,'+ cours.image ;
      });
    });
  }

}
