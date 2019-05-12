import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = new BehaviorSubject(null);
  contacts = [{
    name: 'Shaheer',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/faces/avatar.jpg'
  }, {
    name: 'Usman',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/faces/avatar.jpg'
  }, {
    name: 'Umer',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/faces/avatar.jpg'
  }, {
    name: 'Ahmed',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/faces/avatar.jpg'
  }, {
    name: 'Ali',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/faces/avatar.jpg'
  }, {
    name: 'Arslan',
    phone: '03075506078',
    email: 'shaheerkhan12605@gmail.com',
    img: '../assets/img/faces/avatar.jpg'
  }];

  isAuthenticated = new BehaviorSubject(false);
  constructor() { }
  updateUser(user) {
    this.users.next(user);
  }
  getUser() {
    return this.users;
  }
  updateAuthStatus(status) {
    this.isAuthenticated.next(status);
  }
  getAuthStatus() {
    return this.isAuthenticated;
  }
}
