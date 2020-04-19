import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { InstructorComponent } from './instructor.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseSubscriptionComponent } from './course-subscription/course-subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component: InstructorComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'addCourse', component: AddCourseComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'allCourses', component: CoursesComponent },
      { path: 'mycourses', component: MyCoursesComponent },
      { path: 'coursesInfo/:id', component: CourseInfoComponent },
      { path: 'subscription/:name/:id', component: CourseSubscriptionComponent },
      { path: 'courses', component: CoursesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
