import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/NavBar/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterrComponent } from './Components/Footerr/footerr.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/Error/error/error.component';
@NgModule({
  declarations: [/* pipes / directives  /components*/
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    ErrorComponent,
    FooterrComponent
   ],
  imports: [
    BrowserModule, /*External modules*/
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
