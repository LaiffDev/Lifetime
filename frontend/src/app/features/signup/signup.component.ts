import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthenticationService } from '../../core/authenticationService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  UserForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signUpUser() {
    const fullName = this.UserForm.value.fullname;
    const userName = this.UserForm.value.username;
    const passWord = this.UserForm.value.password;

    if (this.UserForm.valid) {
      this.authService.SignUp(fullName!, userName!, passWord!).subscribe({
        next: (res) => {
          alert('Signed up successfully!');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error signing up: ', err);
        },
      });
    } else {
      alert('Fill in all blank fields');
    }
  }
}
