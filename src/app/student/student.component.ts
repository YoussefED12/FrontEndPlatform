import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  content: string;
  errorMessage: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("sDKVJBWD JS") ;
    this.userService.getStudentCourses().subscribe(
      data => {
        this.content = data;
        console.log(data +"sDKVJBWD JS") ;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

}
