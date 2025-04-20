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

    if (this.UserForm.invalid) {
      alert('All fields are required!');
    } else {
      this.authService.Login(username!, password!).subscribe({
        next: (res: any) => {
          const logged = res['user'];
          const token = res['token'];
          if (logged.username == username) {
            this.router.navigate(['dashboard']);
            localStorage.setItem('username', logged.username);
            localStorage.setItem('token', token);
          }
        },
        error: (err) => {
          console.error('Error fetching for user : ', err);
        },
      });
    }
  }
}
