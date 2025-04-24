import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window != 'undefined' && typeof localStorage != 'undefined') {
    const token = localStorage.getItem('token');

    if (token && token != '') {
      return true;
    } else {
      router.navigate(['']);
      return false;
    }
  }

  return true;
};
