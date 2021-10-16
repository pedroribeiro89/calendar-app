import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  yearOptions = [2020, 2019];
  yearControl = new FormControl(2020);


  constructor() { }

  ngOnInit(): void {
  }

  onYearChange() {
    console.log(this.yearControl.value);
  }

  onMonthChange(month: number) {
    console.log(month);
  }

}
