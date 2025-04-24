import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  //*global variables
  showFiller = false;
  username!: any;

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('username');
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.router.navigate(['']);
  }
}
