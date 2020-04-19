import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/model/course';
import { CourseService } from '../../shared/services/course.service';
import { TokenStorageService } from 'src/app/authentication/token storage/token-storage.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  public courses = new Array<Course>();
  searchText;
  constructor(private service: CourseService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fetchData() ;
  }

  delete(id :number){
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

  fetchData(){

    this.service.getInstructorCourses(Number.parseInt(this.tokenStorage.getUserId())).subscribe(
      courses => { this.courses = courses; }
    );
  }

}
