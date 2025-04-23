import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  username!: string | null;
  date = new Date().toDateString();
  timestamp: any;

  ngOnInit() {
    if (typeof localStorage != 'undefined') {
      this.username = localStorage.getItem('username');
    }
    this.timeConfig();
  }

  timeConfig() {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      this.timestamp = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }
}
