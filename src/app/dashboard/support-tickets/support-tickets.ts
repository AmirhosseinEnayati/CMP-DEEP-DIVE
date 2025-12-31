import { Component } from '@angular/core';
import { TicketModel } from './ticket.model';

@Component({
  selector: 'app-support-tickets',
  standalone: false,
  templateUrl: './support-tickets.html',
  styleUrl: './support-tickets.css',
})
export class SupportTickets {
  tickets: TicketModel[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: TicketModel = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id == id) {
        return { ...ticket, status: 'closed' };
      }

      return ticket;
    });
  }
}
