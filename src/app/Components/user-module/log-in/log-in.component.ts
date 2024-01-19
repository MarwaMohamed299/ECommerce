import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogInDto } from '../DTOs/LogInDto';
import { UserServiceService } from 'src/app/Services/user-service.service';



@Component({
  standalone: true,
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  imports: [ReactiveFormsModule,CommonModule,]

})
export class LogInComponent {

  constructor(private userService:UserServiceService){}
  userLogInForm: FormGroup = new FormGroup({
    Name : new FormControl('',Validators.maxLength(30) && Validators.minLength(3) && Validators.required),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Password : new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(100)])
  });


  onSubmit(e:Event) {
    e.preventDefault();

    var credentials = new LogInDto();
    credentials.Email=this.userLogInForm.controls['Email'].value ?? '';
    credentials.Password = this.userLogInForm.controls['Password'].value ?? '';

    this.userService.login(credentials).subscribe((token)=>{
      console.log(token);
      this.userService.isLoggedIn$.next(true);
    })
  }
}
