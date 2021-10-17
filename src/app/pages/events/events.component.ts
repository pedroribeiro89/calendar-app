import { Component, OnInit } from '@angular/core';
import {ICalendarEvent, ICalendarParams} from "../../components/calendar/calendar.component";
import {EventsService} from "./events.service";
import {finalize, tap} from "rxjs/operators";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public calendar: ICalendarParams = { events: [] };

  public isLoading = false;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    //TODO: fix timezone
    // const x = new Date("2019-08-17");
    // console.log('x', x);
    // console.log('x', new Date(x.getTime() + x.getTimezoneOffset() * 60000));
    // console.log('x', x.getFullYear(),x.getMonth(), x.getDay());
    this.loadEvents(0, 2020);
  }

  loadEvents(month: number, year: number) {
    this.eventsService.loadEvents(month, year)
      .pipe(
        tap(() => this.isLoading = true),
        finalize(() => this.isLoading = false)
      )
      .subscribe((events: ICalendarEvent[]) =>
        this.calendar = { events }
      );

  }
}
