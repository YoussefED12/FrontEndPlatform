import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [

    { path: 'instructor' , loadChildren : './layout/instructor/instructor.module#InstructorModule'},
    { path: 'student' , loadChildren : './layout/student/student.module#StudentModule'},
    { path: 'profile', component: ProfileComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
