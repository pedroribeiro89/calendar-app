import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";

export interface ICalendarParams {
  yearOptions: number[];
  events: ICalendarEvent[];
}

export interface ICalendarEvent {
  date: Date;
  name: string;
  data: any;
}

export interface ICalendarDay {
  day: Date;
  events: ICalendarEvent[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  yearOptions: number[] = [];
  yearControl = new FormControl(null);
  public selectedMonth = 0;

  private events: ICalendarEvent[] = [];
  public daysArray: ICalendarDay[] = [];

  @Input() set calendarParams(params: ICalendarParams)  {
    if (params.yearOptions.length > 0) {
      this.yearOptions = params.yearOptions;
      this.yearControl.setValue(this.yearOptions[0]);
      this.events = params.events;
      this.buildDays();
    }
  }

  constructor() { }

  ngOnInit(): void {}

  private isSameDay(date1: Date, date2: Date) {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }

  private buildDays() {
    const monthDaysNum = new Date(this.yearControl.value, this.selectedMonth+1, 0).getDate();
    this.daysArray = [];
    for (let i = 0; i < monthDaysNum; ++i) {
      const day = new Date(this.yearControl.value, this.selectedMonth, i+1);
      const events = this.events.filter((event: ICalendarEvent) => this.isSameDay(day, event.date));
      this.daysArray.push({day, events});
    }
  }

  onYearChange() {
    this.buildDays();
  }
  onMonthChange(month: number) {
    this.selectedMonth = month;
    this.buildDays();
  }


}
