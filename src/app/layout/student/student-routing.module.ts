import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseSubscriptionComponent } from './course-subscription/course-subscription.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { StudentLayoutComponent } from './student-layout.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: StudentLayoutComponent,
        children: [
            { path: 'coursesInfo/:id', component: CourseInfoComponent },
            { path: 'subscription/:name/:id', component: CourseSubscriptionComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'Mycourses', component: MyCoursesComponent },
            { path: 'subscription', component: MyCoursesComponent },
            { path: '', redirectTo: 'courses', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {

}
