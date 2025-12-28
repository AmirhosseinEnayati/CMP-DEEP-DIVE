import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: false,
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.3) this.currentStatus.set('online');
      else if (random < 0.6) this.currentStatus.set('offline');
      else this.currentStatus.set('unknown');
    }, 2500);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
