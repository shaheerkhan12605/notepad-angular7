import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylePipe } from 'src/app/pipes/style.pipe';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [HomeComponent, StylePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
