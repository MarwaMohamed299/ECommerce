import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports:[ReactiveFormsModule,CommonModule]
})

export class RegisterComponent {

userRegisterForm : FormGroup = new FormGroup({
  Name:new FormControl('',Validators.maxLength(30) && Validators.minLength(3) && Validators.required),
  Email: new FormControl('', [ Validators.email, Validators.required]),
  Password: new FormControl('' , [Validators.required, Validators.minLength(2),Validators.maxLength(30), Validators.pattern("^[a-zA-Z0-9]+$")])
})

onSubmit(){
  console.warn(this.userRegisterForm.value)
}
}
