import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/NavBar/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { FooterrComponent } from './Components/Footerr/footerr.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/Error/error/error.component';
import { ProducrDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserInterceptor } from './Components/user-module/AuthInterceptor/user.interceptor';
@NgModule({
  declarations: [/* pipes / directives  /components*/
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ErrorComponent,
    FooterrComponent,
    ProducrDetailsComponent

   ],
  imports: [
    CommonModule,
    BrowserModule, /*External modules*/
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass :UserInterceptor,
      multi : true,
    }
  ],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
