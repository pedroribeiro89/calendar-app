import { Component, OnInit } from '@angular/core';
import {ICalendarEvent, ICalendarParams} from "../../components/calendar/calendar.component";
import {EventsService} from "./events.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public calendar: ICalendarParams = { events: [] };

  public isLoading = false;
  public error = '';

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.loadEvents(0, 2020);
  }


  loadEvents(month: number, year: number) {
    this.isLoading = true;
    this.error = '';
    this.eventsService.loadEvents(month, year)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (events: ICalendarEvent[]) => this.calendar = { events },
        (error) => {
          this.error = error.error.message;
        }
      );
  }
}
