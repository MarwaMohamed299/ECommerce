import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  standalone: true,
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  imports: [ReactiveFormsModule,CommonModule]

})
export class LogInComponent {

/*ctor ?? */
  userLogInForm: FormGroup = new FormGroup({
    Email : new FormControl('',[Validators.required,Validators.email]),
    Password : new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(30), Validators.pattern("^[a-zA-Z0-9]+$")])
  });


  onSubmit() {
    console.warn(this.userLogInForm.value);
  }

}
