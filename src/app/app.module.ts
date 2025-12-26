import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';

@NgModule({
  declarations: [App, Header, DashboardItem],
  bootstrap: [App],
  imports: [BrowserModule],
})
export class AppModule {}
