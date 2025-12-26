import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: false,
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
  onClick() {
    console.log('clicked');
  }
  @Input({ required: true }) label!: string;
}
