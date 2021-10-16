import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

export interface ICalendarParams {
  yearOptions: number[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  yearOptions: number[] = [];
  yearControl = new FormControl(null);
  public selectedMonth = 1;

  @Input() set calendarParams(params: ICalendarParams)  {
    if (params.yearOptions.length > 0) {
      this.yearOptions = params.yearOptions;
      this.yearControl.setValue(this.yearOptions[0]);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onMonthChange(month: number) {
    this.selectedMonth = month;
  }

}
