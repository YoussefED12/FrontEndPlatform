import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { NewCourse } from 'src/models/newCourse';
import { PlanElement } from 'src/models/PlanElement';
import { CourseService } from '../../shared/services/course.service';
import { TokenStorageService } from 'src/app/authentication/token storage/token-storage.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public startDate = new Date();
  public endDate = new Date();

  public formData: FormData;
  public CourseImage: File;

  public course: NewCourse;
  public preRequest = '';
  public planElement: PlanElement = new PlanElement();
  public date = new Date();
  public minDate: string = this.date.getFullYear() + '-' + (this.date.getMonth() < 10 ? '0' + (this.date.getMonth() + 1) : (this.date.getMonth() + 1)) + '-' + this.date.getDate();;

  // logic 
  public newCourseForm: FormGroup;

  constructor(private fb: FormBuilder, private service: CourseService, private AppstorageService: TokenStorageService) {

  }

  ngOnInit() {
    console.log(new Date().getTime());
    this.course = new NewCourse();
    this.newCourseForm = this.fb.group({
      trainingName: ['', []],
      image: [null, []],
      ritme: ['', []],
      etablissement: ['', []],
      nbrparticipant: [0, []],
      preRequests: this.fb.array([new FormControl()]),
      maxSubscribers: ['', []],
      startdate: ['', []],
      endDate: ['', []],
      nombreofhours: ['', []],
      description: ['', []],
      plan: this.fb.array([])
    })
  }

  onFileChanged($event) {
    if ($event.target.files && $event.target.files.length) {
      const courseImg = $event.target.files[0];
      this.course.image = null;
      this.CourseImage = courseImg;
    }
  }

  addCoursePreRequest() {
    if (this.preRequest)
      this.course.preRequests.push(this.preRequest);
    this.preRequest = '';
  }

  addPlanElement() {
    if (this.planElement.isValid()) {

    }
    this.course.plan.push(this.planElement);
    this.planElement = new PlanElement();
  }

  removePrequest(index: number) {
    this.course.preRequests.splice(index, 1);
  }
  removePlanElement(index: number) {
    this.course.plan.splice(index, 1);
  }

  // main function
  saveCourse() {

    this.formData = new FormData();
    this.course.nbrparticipant = 0;
    this.course.started = 0;
    this.formData.append('courseImg', this.CourseImage);
    this.formData.append('trainingObj', JSON.stringify(this.course));
    console.log(this.formData.get('trainingObj'));
    this.service.addCourse(this.formData, Number.parseInt(this.AppstorageService.getUserId())).subscribe(data => {
      console.log(data);
    });
  }

}