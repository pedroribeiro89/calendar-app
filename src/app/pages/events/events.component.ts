import { Component, OnInit } from '@angular/core';
import {ICalendarParams} from "../../components/calendar/calendar.component";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  calendar: ICalendarParams = {yearOptions: []};

  constructor() { }

  ngOnInit(): void {
    this.calendar = {
      yearOptions: [2020, 2019]
    };
  }
}
