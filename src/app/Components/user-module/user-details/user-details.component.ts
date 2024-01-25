import { Component, OnInit, inject } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserServiceService) {}
  Name: string = '';
  Email: string = '';
  id:string ='';

  ngOnInit() {
    const token = localStorage.getItem('token');

      this.userService.GetUserDetails().subscribe({
        next: (data:any) => {
          console.log(data);
          this.Name= data.userName;
          this.Email=data.email
        },
        error: error => {
          console.error(error);
        }
    });
  }
}


