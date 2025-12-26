import { Component } from '@angular/core';

@Component({
  selector: 'app-server-traffic',
  standalone: false,
  templateUrl: './server-traffic.html',
  styleUrl: './server-traffic.css',
})
export class ServerTraffic {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 100,
    },
    {
      id: 'd47',
      value: 350,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
