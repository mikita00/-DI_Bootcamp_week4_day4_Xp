import { Component } from '@angular/core';
import {NgForm } from '@angular/forms';
@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent {
  email: string= "";
  pattern: string= "";

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('form is valid')
    } else {
      console.log('form is not valid')
    }
  }

}
