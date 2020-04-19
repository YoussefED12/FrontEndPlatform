import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorComponent } from './instructor.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseSubscriptionComponent } from './course-subscription/course-subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SubscriptionComponent } from './subscription/subscription.component';


@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    InstructorComponent,
    AddCourseComponent,
    CoursesComponent,
    MyCoursesComponent,
    CourseInfoComponent,
    CourseSubscriptionComponent,
    DashboardComponent,
    ProfileComponent,
    SubscriptionComponent,
    ]
})
export class InstructorModule { }
