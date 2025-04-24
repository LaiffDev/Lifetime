import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthenticationService } from '../../core/authenticationService/authentication.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  UserForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  users: any[] = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signUpUser() {
    const fullname = this.UserForm.value.fullname;
    const username = this.UserForm.value.username;
    const password = this.UserForm.value.password;

    this.authService.SignUp(fullname!, username!, password!).subscribe({
      next: (res) => {
        alert('Saved successfully!');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Username already taken!');
        console.error('Error saving user : ', err);
      },
    });
  }
}
