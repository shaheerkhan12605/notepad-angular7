import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UsersService } from 'src/app/shared-services/users/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  contacts: any;
  constructor(public ngxSmartModalService: NgxSmartModalService, private userService: UsersService ) {
    this.contacts = this.userService.contacts;
  }

  ngOnInit() {
  }

}
