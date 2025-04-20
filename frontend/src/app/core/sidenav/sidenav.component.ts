import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatMenuModule, RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  //*global variables
  showFiller = false;
  username!: string | null;

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof localStorage != 'undefined') {
      this.username = localStorage.getItem('username');
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.router.navigate(['']);
  }
}
