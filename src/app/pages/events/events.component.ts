import { Component, OnInit } from '@angular/core';
import {ICalendarParams} from "../../components/calendar/calendar.component";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  calendar: ICalendarParams = {yearOptions: [], events: []};

  constructor() { }

  ngOnInit(): void {
    this.calendar = {
      yearOptions: [2020, 2019],
      events: [
        {
          date: new Date("2019-08-09"),
          name: "Liverpool FC x Norwich City FC",
          data: {x:'data'}
        },
        {
          date: new Date("2019-08-10"),
          name: "West Ham United FC x Manchester City FC",
          data: {x:'data'}
        },
        {
          date: new Date("2019-08-17"),
          name: "Burnley FC x Southampton FC",
          data: {x:'data'}
        }
     ]
    };
    const x = new Date("2019-08-17");
    console.log('x', x);
    console.log('x', new Date(x.getTime() + x.getTimezoneOffset() * 60000));
    console.log('x', x.getFullYear(),x.getMonth(), x.getDay());

  }

}
