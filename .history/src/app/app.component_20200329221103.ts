import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './authentication/token storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  private isLoggedIn = false  ;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true   ;
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_INSTRUCTOR') {
          this.authority = 'instructor';
          return false;
        }
        this.authority = 'student';
        return true;
      });
    }
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
