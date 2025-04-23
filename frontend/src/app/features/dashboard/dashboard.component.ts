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
    this.formatDate();
    this.timeConfig();
  }

  formatDate() {
    const now = new Date();
    const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const year = now.getFullYear();

    this.date = `${weekday}, ${day} ${month}.${year}`; // "Wed, 23 Apr.2025"
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
