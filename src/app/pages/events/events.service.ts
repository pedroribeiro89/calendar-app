import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ICalendarEvent} from "../../components/calendar/calendar.component";
import {environment} from "../../../environments/environment";

export interface IEventsResponse {
  round: string,
  date: string,
  team1: string,
  team2: string,
  score: { ft: number[] }
}

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }

  loadEvents(month: number, year: number): Observable<ICalendarEvent[]> {
    let params = new HttpParams();
    params = params.set('month', month.toString());
    params = params.set('year', year.toString());
    return this.http.get<IEventsResponse[]>(`${environment.baseUrl}/events`, { params })
      .pipe(map((response: IEventsResponse[]) => {
        return response
          .map((response: IEventsResponse) => { return { date: new Date(response.date), name: `${response.team1} x ${response.team2}` }; })
          .filter((event: ICalendarEvent) => event.date.getFullYear() === year && event.date.getMonth() === month);
      }));
  }

  // mock backend events
  // mockEventsRequest(month: number, year: number): Observable<ICalendarEvent[]> {
  //   return this.http.get<IEventsResponse[]>("assets/mock-events.json")
  //     .pipe(map((response: IEventsResponse[]) => {
  //       return response
  //         .map((response: IEventsResponse) => { return { date: new Date(response.date), name: `${response.team1} x ${response.team2}` }; })
  //         .filter((event: ICalendarEvent) => event.date.getFullYear() === year && event.date.getMonth() === month);
  //     }));
  // }
}
