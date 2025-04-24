import { Component } from '@angular/core';
import { SignupFormComponent } from '../../shared/signup-form/signup-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [SignupFormComponent, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {}
