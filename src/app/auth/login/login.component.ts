import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared-services/users/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router:Router) {
  }
  ngOnInit() {
    this.userService.updateAuthStatus(false);
    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get form() { return this.loginForm.controls; }
  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.userService.updateAuthStatus(true);
    this.router.navigate(['home']);

  }
  login() {
    console.log('loggedin');
  }