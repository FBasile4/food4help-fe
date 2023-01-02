import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8083/api/reservations/'; /*contiene la baseUrl corrispondente con il be*/

  constructor(private http: HttpClient) { }

  newReservation(reservation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `create`, reservation);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.baseUrl}reservations`);
  }

  deleteReservation(id: number){
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }
}
