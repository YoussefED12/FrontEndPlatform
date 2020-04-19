import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseSubscription } from '../../shared/model/courseSubscription';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../shared/services/course.service';

@Component({
  selector: 'app-course-subscription',
  templateUrl: './course-subscription.component.html',
  styleUrls: ['./course-subscription.component.css']
})
export class CourseSubscriptionComponent implements OnInit {

  public courseName: any;
  public subscription: FormGroup;
  public subscriptionObject: CourseSubscription;

  constructor(private fb: FormBuilder, private ar: ActivatedRoute,private service :CourseService) { }

  ngOnInit() {

    this.createForm() ;
    this.subscriptionObject = new CourseSubscription();
    this.getRouteParams();
  }

  public submitForm() {
    Object.assign(this.subscriptionObject, this.subscription.value);
    console.log(this.subscriptionObject);
    this.subscribeToCourse();
  }

  createForm() {
    this.subscription = this.fb.group({
      phone: ['', [Validators.pattern('[0-9]*'), Validators.required]],
      city: ['', [Validators.required]],
      adress: ['', [Validators.required]]
    });
  }

  getRouteParams() {
    this.subscriptionObject.idUser = 45;
    this.ar.params.subscribe(params => {
      this.subscriptionObject.idTraining = params['id'];
      this.courseName = params['name'];
    });
  }

  public subscribeToCourse():void{
    this.service.subscribeToCourse(this.subscriptionObject).subscribe( () =>{
      console.log('sent');
  }) ;
  } 
}
