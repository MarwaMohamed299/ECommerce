import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

constructor(private userService: UserServiceService,private router : Router){}
  userRegisterForm: FormGroup = new FormGroup({
    Name: new FormControl(
      '',
      Validators.maxLength(30) && Validators.minLength(3) && Validators.required
    ),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
  });

  onSubmit() {
    console.warn(this.userRegisterForm.value);

    if (this.userRegisterForm.valid)
    {
      this.userService.register(this.userRegisterForm.value).subscribe({
        next: response => {
          console.log('Registration successful', response);
          this.router.navigateByUrl('/');
        },
        error: error => {
          console.error('Error in registeration', error);
        }
      });
    }
  }
}
