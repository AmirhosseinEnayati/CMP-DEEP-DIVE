import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  standalone: false,
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  onSubmit(title: string, text: string) {
    console.log('Title: ' + title + ' text: ' + text);
  }
}
