import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { StudentRoutingModule } from './student-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseSubscriptionComponent } from './course-subscription/course-subscription.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { StudentLayoutComponent } from './student-layout.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    StudentLayoutComponent,
    CoursesComponent,
    CourseSubscriptionComponent,
    CourseInfoComponent,
    MyCoursesComponent,
    DashboardComponent]
})
export class StudentModule { }
