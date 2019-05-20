import { Component, Renderer2, OnInit } from '@angular/core';
import { UsersService } from './shared-services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  isLoggedIn = false;
  showProfile = false;
  constructor(private sharedService: UsersService, private renderer: Renderer2) {
    // this.sharedService.updateAuthStatus(false);
    this.sharedService.getAuthStatus().subscribe(status => {
      this.isLoggedIn = status;
    });
    this.sharedService.getShowProfileBarStatus().subscribe(status => {
      this.showProfile = status;
    });
  }
  ngOnInit() {
  }
}
