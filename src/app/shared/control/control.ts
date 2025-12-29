import {
  AfterContentInit,
  Component,
  contentChild,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

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
export class Control implements AfterContentInit{
  @Input({ required: true }) label!: string;
  el = inject(ElementRef);

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  onClick() {
    console.log('clicked');
    console.log(this.el);

    console.log("Controls:");
    console.log(this.control());
  }
}
