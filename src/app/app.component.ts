import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { endOfDay, endOfHour, startOfDay, startOfHour } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    viewDate: Date = new Date();

    mil : number = this.viewDate.getTime() + 4000000

    events : CalendarEvent[] = [
        {
            start: new Date(),
            end: new Date(this.mil),
            title: "event One",
            color: <EventColor>{
                primary: 'green'
            }
        },
        {
            start: new Date(),
            end: new Date(this.mil),
            title: 'event Two',
            color: <EventColor>{
                primary: 'red'
            }
        },
        {
            start: new Date(),
            end: new Date(this.mil),
            title: 'event Three',
            color: <EventColor>{
                primary: '#FFFF00'
            }
        },
        {
            start: new Date(),
            end: new Date(this.mil),
            title: 'event Four',
            color: <EventColor>{
                primary: '#0000FF'
            }
        }
    ];
}
