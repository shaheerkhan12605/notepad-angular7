import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UsersService } from 'src/app/shared-services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  notes = [];
  timestamp = [];
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '350px',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
  constructor(private formBuilder: FormBuilder , private sharedService: UsersService) {
  }
  ngOnInit() {
    this.sharedService.updateAuthStatus(true);
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
