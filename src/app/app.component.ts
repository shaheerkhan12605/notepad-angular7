import { Component } from '@angular/core';
import { UsersService } from './shared-services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  isLoggedIn = false;
  constructor(private sharedService: UsersService) {
    // this.sharedService.updateAuthStatus(false);
    this.sharedService.getAuthStatus().subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}