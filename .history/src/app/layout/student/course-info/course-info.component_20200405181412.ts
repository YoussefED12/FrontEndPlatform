import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/model/course';
import { CourseService } from '../../shared/services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  public CourseId: number;
  public totalHours = 0;
  public coursePrice = 0;
  public courseInfo: Course
  constructor(private service: CourseService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.CourseId = params['id']
    });
    this.fetchCourseData() ;
  }

  public fetchCourseData(): void {
    this.service.staticCourse().subscribe(data => {
      this.courseInfo = data;
      this.courseInfo.plan.forEach(
        plan => {
          this.coursePrice += plan.price;
          this.totalHours += Number.parseInt(plan.duration);
        }
      );
    });
  }

}
