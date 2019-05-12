import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared-services/users/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private sharedService: UsersService, private formBuilder: FormBuilder) {
    this.sharedService.updateAuthStatus(true);

  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get form() { return this.contactForm.controls; }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.form);
    console.log(this.contactForm.value);
    this.sharedService.contacts.push(this.contactForm.value)
  }
}

