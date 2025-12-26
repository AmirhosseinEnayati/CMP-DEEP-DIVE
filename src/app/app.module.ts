import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';
import { ServerStatus } from "./dashboard/server-status/server-status";
import { ServerTraffic } from './dashboard/server-traffic/server-traffic';
import { SupportTickets } from './dashboard/support-tickets/support-tickets';
import { Button } from './shared/button/button';
import { NewTicket } from './dashboard/support-tickets/new-ticket/new-ticket';
import { Control } from './shared/control/control';

@NgModule({
  declarations: [App, Header, DashboardItem, ServerStatus, ServerTraffic, SupportTickets, NewTicket, Button, Control],
  bootstrap: [App],
  imports: [BrowserModule],
})
export class AppModule {}
