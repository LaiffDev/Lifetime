import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const AuthToken =
    typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  //if the token exists, clone it so it can be used to navigate other pages
  const AuthRequest = AuthToken
    ? req.clone({ setHeaders: { Authorization: `Bearer ${AuthToken}` } })
    : req;
  return next(AuthRequest).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('Unauthorized request : ', err);

          //try reconnecting when browser is refreshed and sends 401
          switchMap((newToken: string) => {
            const newReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newToken}` },
            });
            return next(newReq);
          });
        }
      } else {
        console.error('An error occured while interceptering : ', err);
      }
      return throwError(() => err);
    })
  );
};
