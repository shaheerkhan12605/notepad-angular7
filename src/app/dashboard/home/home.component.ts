import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  notes = [];
  timestamp = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      formModel: ['', Validators.required]
    });
  }
  get editor() { return this.form.controls; }

  onSubmit() {
    console.log(this.form.controls);
    if (this.form.invalid) {
      return;
    }
    const myDate = new Date();
    const doc = this.form.value.formModel ;
    // const doc = new DOMParser().parseFromString(this.form.value.formModel, 'text/xml');
    this.timestamp.push(myDate);
    this.notes.push(doc);
    console.log(this.notes);
  }

}
