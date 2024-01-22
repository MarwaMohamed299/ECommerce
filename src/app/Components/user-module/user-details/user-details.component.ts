import { Component, OnInit, inject } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt'; /* To Remember:No Injection in NgModule */

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserServiceService, private jwtHelper: JwtHelperService) {}
  Name: string = '';
  Email: string = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const id = decodedToken.sub;

      this.userService.GetUserDetails(id).subscribe({
        next: data => {
          console.log(data);
          // this.Name=data.name
          // this.Email=data.Email
          
        },
        error: error => {
          console.error(error);
        }
      });
    } else {
      console.log("Token is not found");
    }
  }
}
