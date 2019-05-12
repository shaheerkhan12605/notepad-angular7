import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDropModule } from 'ngx-file-drop';

import { UsersRoutingModule } from './users-routing.module';
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
  declarations: [NewContactComponent],
  imports: [
    CommonModule,
    FileDropModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
