import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  GetUserList() {
    return this._http.get<any>(`${environment.baseUrl}/users`);
  }

  SignUp(user: any) {
    return this._http.post<any>(`${environment.baseUrl}/sign-up`, user);
  }

  Login(user: any) {
    return this._http.post<any>(`${environment.baseUrl}/login`, user);
  }
}
