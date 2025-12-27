import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: false,
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      const random = Math.random();
      if (random < 0.3) this.currentStatus = 'online';
      else if (random < 0.6) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);
  }
}
