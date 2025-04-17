import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../core/authenticationService/authentication.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //*global variables
  loggedUser: any;

  //*users formgroup to send data to the server
  UserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  loginUser() {
    const username = this.UserForm.value.username;
    const password = this.UserForm.value.password;

    this.authService.Login(username!, password!).subscribe({
      next: (res) => {
        this.loggedUser = res;

        if (
          this.loggedUser.username == username &&
          this.loggedUser.password == password
        ) {
          this.router.navigate(['dashboard']);
        }
      },
      error: (err) => {
        console.error('Error logging in user : ', err);
      },
    });
  }
}
