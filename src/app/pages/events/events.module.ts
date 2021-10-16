import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {EventsRoutingModule} from "./events-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MonthSelectModule} from "../../components/month-select/month-select.module";
import {CalendarModule} from "../../components/calendar/calendar.module";



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsRoutingModule,
    CalendarModule
  ]
})
export class EventsModule { }
