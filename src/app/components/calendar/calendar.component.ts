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
  public selectedMonth = 0;
  public daysArray: Date[] = [];

  @Input() set calendarParams(params: ICalendarParams)  {
    if (params.yearOptions.length > 0) {
      this.yearOptions = params.yearOptions;
      this.yearControl.setValue(this.yearOptions[0]);
      this.buildDays();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  private buildDays() {

    const monthDaysNum = new Date(this.yearControl.value, this.selectedMonth+1, 0).getDate();
    console.log(this.yearControl.value, this.selectedMonth, monthDaysNum);
    this.daysArray = [];
    for (let i = 0; i < monthDaysNum; ++i) {
      this.daysArray.push(new Date(this.yearControl.value, this.selectedMonth, i+1));
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
