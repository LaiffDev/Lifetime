import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { authenticationGuard } from './utils/authentication.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: '',
    component: SidenavComponent,
    canActivate: [authenticationGuard],
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
];
