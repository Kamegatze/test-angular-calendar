import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
