import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { InstructorComponent } from './instructor.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';


const routes: Routes = [
  { 
    path: '',
    component: InstructorComponent,
    children :[
      { path: 'addCourse', component: AddCourseComponent },
      { path: 'allCourses', component: CoursesComponent },
      { path: 'mycourses', component: MyCoursesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
