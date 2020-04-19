import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/token storage/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent implements OnInit {

  public logedInAsStudent = false;
  constructor(private tokenStorage: TokenStorageService, private routerService: Router) { }

  ngOnInit() {
    this.verifyUser();
  }

  public verifyUser() {
      this.tokenStorage.getAuthorities().forEach(authority => {
        if (authority == 'ROLE_STUDENT') {
          this.logedInAsStudent = true;
        }
      });
      if (!this.logedInAsStudent) {
        this.routerService.navigate(['/auth/login']);
      }

  }

}
