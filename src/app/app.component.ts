import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './Services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ECommerce';

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
    {
      this.userService.isLoggedIn$.next(true);
    }
  }
}
