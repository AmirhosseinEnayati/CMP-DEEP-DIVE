import { Component, ElementRef, viewChild, ViewChild, viewChildren } from '@angular/core';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-new-ticket',
  standalone: false,
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form2 = viewChild<ElementRef<HTMLFormElement>>('form');
  private form3=viewChild.required<ElementRef<HTMLFormElement>>('form');
  private buttonList = viewChildren(Button);
  onSubmit(title: string, text: string) {
    console.log('Title: ' + title + ' text: ' + text);
    console.log(this.form);
    this.form?.nativeElement.reset();
  }
}
