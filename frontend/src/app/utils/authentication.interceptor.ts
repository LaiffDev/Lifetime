import { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  //check if localStorage is not undefined
  const AuthToken =
    typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  //cloning the request with the token to navigate through various pages
  const AuthRequest = AuthToken
    ? req.clone({ setHeaders: { Authorization: `Bearer ${AuthToken}` } })
    : req;
  return next(AuthRequest);
};
