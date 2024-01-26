import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/NavBar/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { FooterrComponent } from './Components/Footerr/footerr.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/Error/error/error.component';
import { ProducrDetailsComponent } from './Components/ProductDetails/ProductDetails.component';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserInterceptor } from './Components/user-module/AuthInterceptor/user.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddComponent } from './Components/add/add.component';
import { EditProductComponent } from './Components/edit/edit.component';
@NgModule({
  declarations: [/* pipes / directives  /components*/
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ErrorComponent,
    FooterrComponent,
    ProducrDetailsComponent,
    AddComponent,
    EditProductComponent

   ],
  imports: [
    CommonModule,
    BrowserModule, /*External modules*/
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
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
