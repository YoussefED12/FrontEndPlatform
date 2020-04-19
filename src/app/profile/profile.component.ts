import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../authentication/token storage/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info: any;
  tokenn :any ;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      id : this.token.getUserId() 
    };
    this.tokenn = this.token.getToken();
}

}
