import { Injectable } from '@angular/core';
import { Event } from './event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) { }

  private eventsUrl = 'http://localhost:4000/api/events';  // URL to web api // should be in an ENV file

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
  }

}
