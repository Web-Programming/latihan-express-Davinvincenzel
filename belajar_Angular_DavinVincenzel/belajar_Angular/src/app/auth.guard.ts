import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthenticationService).isLoggedIn() ? true : inject(Router).createUrlTree(['/login']);
};