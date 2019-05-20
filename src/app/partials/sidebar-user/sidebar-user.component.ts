import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UsersService } from 'src/app/shared-services/users/users.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  contacts: any;
  constructor(public ngxSmartModalService: NgxSmartModalService, private userService: UsersService) {
    this.contacts = this.userService.contacts;
  }

  ngOnInit() {
  }
  hideProfileBar() {
    console.log('here we are')
    this.userService.updateShowProfileBarStatus(false);
  }

}