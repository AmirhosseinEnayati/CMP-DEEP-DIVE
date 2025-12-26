import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: false,
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {
  @Input({ required: true }) label!: string;
}
