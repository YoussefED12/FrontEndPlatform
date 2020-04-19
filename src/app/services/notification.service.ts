import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../authentication/token storage/token-storage.service';


const BASE_URL = "http://localhost:9090";

@Injectable({
  providedIn: 'root'
})

export class NotificationService {



  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  public updateNotifications(): Observable<any> {
    if (this.tokenStorage.getToken())
    return this.http.get(BASE_URL + '/notification/userNotification/' + this.tokenStorage.getUserId());
    return null ;
  }

  public updateNotificationsForRead(): Observable<any> {
    return this.http.get(BASE_URL + '/notification/userNotificationForMarkAsReaded/' + this.tokenStorage.getUserId());
  }

  public markNotificationsAsReaded(ids : Array<number>): Observable<any> {
    return this.http.post(BASE_URL + '/notification/markNotificationsAsReaded' , ids);
  }
}