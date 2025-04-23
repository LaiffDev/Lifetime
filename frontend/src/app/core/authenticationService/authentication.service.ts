import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  //AUTHENTICATION SERVICES
  SignUp(fullname: String, username: String, password: String) {
    //storing the user as an object
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

  GetUsers() {
    return this.http.get(`${environment.baseUrl}/users`);
  }
}
