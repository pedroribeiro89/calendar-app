import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {EventsRoutingModule} from "./events-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "../../components/calendar/calendar.module";
import {EventsService} from "./events.service";



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsRoutingModule,
    CalendarModule
  ],
  providers: [EventsService]
})
export class EventsModule { }
