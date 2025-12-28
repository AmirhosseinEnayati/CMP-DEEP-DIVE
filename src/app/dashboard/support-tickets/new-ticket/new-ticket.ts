import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  standalone: false,
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  onSubmit(titleElement: HTMLInputElement) {
    console.log(titleElement.value);
  }
}
