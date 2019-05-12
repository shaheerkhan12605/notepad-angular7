import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared-services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService) {
  }
  ngOnInit() {
    this.userService.updateAuthStatus(false);
  }

}
