import { Component, OnInit } from '@angular/core';

import { AuthService } from '../authentication/auth.service';
import { TokenStorageService } from '../authentication/token storage/token-storage.service';
import { AuthLoginInfo } from '../authentication/authentication formes/login-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private routerService: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log(data);
        // fill out authentication info       
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveUserId(data.userId);
        this.roles = this.tokenStorage.getAuthorities();

        // ui configuration
        this.isLoginFailed = false;
        this.isLoggedIn = true;

        // redirection 
        this.tokenStorage.getAuthorities().forEach(authority => {
          if (authority == 'ROLE_STUDENT') {
            return this.routerService.navigate(['/student']);
          }
          else if (authority == 'ROLE_INSTRUCTOR') {
            return this.routerService.navigate(['/instructor']);
          }
        });

        //this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
