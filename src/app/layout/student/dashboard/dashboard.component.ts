import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  im1:string="assets/images/4.jpg";
  im2:string="assets/images/5.jpg";
  im3:string="assets/images/3.jpeg";

}
