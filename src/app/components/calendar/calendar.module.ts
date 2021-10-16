import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MonthSelectModule} from "../month-select/month-select.module";



@NgModule({
    declarations: [
        CalendarComponent
    ],
    exports: [
        CalendarComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MonthSelectModule
  ]
})
export class CalendarModule { }
