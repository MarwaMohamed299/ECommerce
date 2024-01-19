import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
NavBarisLoggedIn =false;

constructor( private userService:UserServiceService){}

ngOnInit(): void {

  this.userService.isLoggedIn$.subscribe((IsLoggedIn)=>
  this.NavBarisLoggedIn =IsLoggedIn
  )
}
}
