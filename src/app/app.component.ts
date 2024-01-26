import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './Services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ECommerce';

  constructor(private userService: UserServiceService) {}
  Name: string = '';
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.userService.GetUserDetails().subscribe({
        next: (data: any) => {
          this.userService.isLoggedIn$.next(true);
          this.Name = data.userName;
        },
        error: (error) => {
          this.userService.isLoggedIn$.next(false);
          console.error(error);
        },
      });
    }
  }
}
