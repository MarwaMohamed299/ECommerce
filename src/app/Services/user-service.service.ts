import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogInDto } from '../Components/user-module/DTOs/LogInDto';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenDto } from '../Components/user-module/DTOs/TokenDto';
import { tap } from 'rxjs/operators';
import { RegisterDto } from '../Components/user-module/DTOs/RegisterDto';

@Injectable({

  providedIn: 'root'

})
export class UserServiceService {

  public isLoggedIn$ =new BehaviorSubject<boolean>(false); /* To make it as a subscribtion to a service ass it is an object from subscribtion */

  constructor(private client:HttpClient) { }

  public login(credentials: LogInDto): Observable<TokenDto> {
    return this.client.post<TokenDto>(
      'https://localhost:7175/api/Users/Login',
      credentials
    )
    .pipe(
      tap((TokenDto) => {
        this.isLoggedIn$.next(true);
        localStorage.setItem('token', TokenDto.token);
      })
    );

  }
  public register(credentials:RegisterDto){
  return this.client.post(`https://localhost:7175/api/Users/Register`,credentials)
  }

  public GetUserDetails (id:string)
{
  return this.client.get(`https://localhost:7175/api/Users/UserDetails/${id}`);

}
}
