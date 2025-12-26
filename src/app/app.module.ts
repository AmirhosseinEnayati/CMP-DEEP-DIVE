import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './header/header';

@NgModule({
  declarations: [App, Header],
  bootstrap: [App],
  imports: [BrowserModule],
})
export class AppModule {}
