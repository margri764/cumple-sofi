import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronComponent } from './cron/cron/cron.component';
import { IvyCarouselModule } from 'angular-responsive-carousel2';

@NgModule({
  declarations: [
    AppComponent,
    CronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
