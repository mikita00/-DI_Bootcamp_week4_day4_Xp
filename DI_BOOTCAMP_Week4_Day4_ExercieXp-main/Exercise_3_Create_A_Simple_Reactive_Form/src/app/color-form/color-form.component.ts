import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit{
  form: FormGroup;
  favoriteColor: string= "";
  formBuilder: FormBuilder;

  constructor( formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      favoriteColor: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.form.value.favoriteColor);
    this.favoriteColor = this.form.value.favoriteColor;
  }

}
