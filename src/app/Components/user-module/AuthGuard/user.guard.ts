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

