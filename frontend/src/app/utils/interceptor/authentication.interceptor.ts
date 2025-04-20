import { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const AuthToken =
    typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  const clonedReq = req.clone({
    setHeaders: { Authorization: `Bearer ${AuthToken}` },
  });
  return next(clonedReq);
};
