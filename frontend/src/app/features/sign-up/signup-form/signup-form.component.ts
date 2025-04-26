import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { SignUp } from '../../../shared/store/users-store/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  SignUpForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(protected store: Store, private router: Router) {}

  ngOnInit() {}

  saveUser() {
    if (this.SignUpForm.invalid) {
      alert('All fields are required!');
    } else {
      this.store
        .dispatch(new SignUp(this.SignUpForm.value))
        .subscribe((res) => {
          this.router.navigate(['login']);
        });
    }
  }
}
