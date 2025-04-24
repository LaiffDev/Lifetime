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

  ngOnInit() {
    // this.authService.GetUsers().subscribe((res) => {
    //   console.log(res);
    // });
  }

  loginUser() {
    const username = this.UserForm.value.username;
    const password = this.UserForm.value.password;

    if (this.UserForm.invalid) {
      alert('Invalid credentials!');
    } else {
      this.authService.Login(username!, password!).subscribe({
        next: (res: any) => {
          this.loggedUser = res;

          if (typeof localStorage != 'undefined') {
            localStorage.setItem('username', this.loggedUser.user.username);
            localStorage.setItem('token', this.loggedUser.token);

            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          alert('Invalid credentials! Try again');
          console.error('Error logging in : ', err);
        },
      });
    }
  }
}
