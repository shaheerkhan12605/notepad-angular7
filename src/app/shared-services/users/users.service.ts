import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = new BehaviorSubject(null);
  showProfileBar = new BehaviorSubject(false);
  contacts = [{
    name: 'Shaheer',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/avatar-1.jpg'
  }, {
    name: 'Usman',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/avatar-2.jpg'
  }, {
    name: 'Umer',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/avatar-3.jpg'
  }, {
    name: 'Ahmed',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/avatar-4.jpg'
  }, {
    name: 'Ali',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/avatar-5.jpg'
  }, {
    name: 'Arslan',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/avatar-6.jpg'
  }];

  isAuthenticated = new BehaviorSubject(false);
  constructor() { }
  updateUser(user) {
    this.users.next(user);
  }
  getUser() {
    return this.users;
  }
  updateShowProfileBarStatus(status) {
    this.showProfileBar.next(status);
  }
  getShowProfileBarStatus() {
    return this.showProfileBar;
  }
  updateAuthStatus(status) {
    this.isAuthenticated.next(status);
  }
  getAuthStatus() {
    return this.isAuthenticated;
  }
}
