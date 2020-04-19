import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../authentication/token storage/token-storage.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private roles: string[];
  private authority: string;
  private isLoggedIn = false;


  public notified = false;
  notifsNumber: number = 0;

  constructor(private tokenStorage: TokenStorageService,
    private NotficationService: NotificationService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.notificationListenner(6000);
    }
    this.updateNavConf(2000);

  }

  public logout() {
    this.isLoggedIn = false;
    this.tokenStorage.signOut();
    window.location.reload();
  }

  public updateNavConf(time: number) {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    console.log('ref called');

    setTimeout(() => {
      this.updateNavConf(time);
    }, time);
  }

  public notificationListenner(duration: number) {
    this.NotficationService.updateNotifications().subscribe(
      (response : Array<any>) => {
        this.notified = response.length > 0 ;
        this.notifsNumber = response.length  ;
      }
    )
    setTimeout(
      () => {
        this.notificationListenner(duration)
      },
      duration
    );
  }



}
