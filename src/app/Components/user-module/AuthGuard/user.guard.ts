import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

export const userGuard: CanActivateFn = (route, state) => {
  const userService =inject(UserServiceService);
  const router = inject(Router)

  if (userService.isLoggedIn$.value)
  {
    return true;

  }
  router.navigateByUrl('/User/LogIn');
  return false;

};


// LogIn:1 Uncaught (in promise) Error: A listener indicated an asynchronous
// response by returning true, but the message channel closed before a response was received
