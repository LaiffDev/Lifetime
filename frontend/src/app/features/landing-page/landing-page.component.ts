import { Component, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UsersState } from '../../shared/store/users-store/user.state';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  providers: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor() {}

  ngOnInit() {}
}
