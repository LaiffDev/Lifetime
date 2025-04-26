import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from '../../../shared/store/users-store/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  LoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(protected store: Store, private router: Router) {}

  ngOnInit() {}

  loginUser() {
    if (this.LoginForm.invalid) {
      alert('Invalid credentials! Check username or password');
    } else {
      this.store.dispatch(new Login(this.LoginForm.value)).subscribe((res) => {
        this.router.navigate(['dashboard']);
      });
    }
  }
}
