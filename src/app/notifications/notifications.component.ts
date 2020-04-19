import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NotificationElement } from "../../models/NotificationElement";


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public notifications: Array<NotificationElement>;

  constructor(private service: NotificationService) { }

  ngOnInit() {
    this.service.updateNotificationsForRead().subscribe(
      response => {
        console.log(response);
        this.notifications = response;
      }
    );
  }

 

}