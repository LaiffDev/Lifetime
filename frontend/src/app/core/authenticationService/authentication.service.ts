import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  //AUTHENTICATION SERVICES
  GetUsers() {
    return this.http.get(`${environment.baseUrl}/users`);
  }

  SignUp(fullname: String, username: String, password: String) {
    const User = {
      fullname: fullname,
      username: username,
      password: password,
    };
    return this.http.post(`${environment.baseUrl}/sign-up`, User);
  }

  Login(username: String, password: String) {
    const LoggedUser = {
      username: username,
      password: password,
    };
    return this.http.post(`${environment.baseUrl}/login`, LoggedUser);
  }
}
