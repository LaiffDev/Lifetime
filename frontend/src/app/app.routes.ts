import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authenticationGuard } from './utils/guard/authentication.guard';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { RoutineComponent } from './features/routine/routine.component';
import { TasksComponent } from './features/tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: '',
    component: SidenavComponent,
    canActivate: [authenticationGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'routine', component: RoutineComponent },
      { path: 'tasks', component: TasksComponent },
    ],
  },
];
