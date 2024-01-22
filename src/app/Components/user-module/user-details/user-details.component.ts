import { Component, OnInit, inject } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserServiceService, private jwtHelper: JwtHelperService) {}
  Name: string = '';
  Email: string = '';
  id:string ='';
  Nationality :string ='';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.id = decodedToken.sub;
      this.Name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      this.Email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
      this.Nationality = decodedToken.Nationality;

      this.userService.GetUserDetails(this.id).subscribe({
        next: (data:any) => {
          console.log(data);
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
