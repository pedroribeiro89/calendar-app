import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.scss']
})
export class MonthSelectComponent {

  @Output() change = new EventEmitter<number>();
  private MONTH_STR_LIST = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  public current = 0;
  public currentStr = this.MONTH_STR_LIST[this.current];

  constructor() { }

  private changeMonth(month: number) {
    this.current = month;
    this.currentStr = this.MONTH_STR_LIST[this.current];
    this.change.emit(this.current);
  }

  previousMonth() {
    if (this.current > 0) {
      this.changeMonth(this.current - 1);
    }
  }

  nextMonth() {
    if (this.current < 11) {
      this.changeMonth(this.current + 1);
    }
  }

}
