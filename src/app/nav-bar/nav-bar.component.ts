import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../authentication/token storage/token-storage.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

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
    private NotficationService: NotificationService,
    private router :Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.updateNavConf(4000);
  }

  public logout() {
    this.isLoggedIn = false;
    this.tokenStorage.signOut();
    window.location.reload();
  }

  public updateNavConf(time: number) {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.NotficationService.updateNotifications().subscribe(
        (response : Array<any>) => {
          this.notified = response.length > 0 ;
          this.notifsNumber = response.length  ;
        }
      )
    }
    else {
      //this.router.navigate(['/auth/login']);
    }
    setTimeout(() => {
      this.updateNavConf(time);
    }, time);
  }

}