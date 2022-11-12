import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Box} from '../box';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private baseUrl = 'http://localhost:8080/api/boxms'; /*contiene la baseUrl corrispondente con il be*/

  box: Box;

  constructor(private http: HttpClient) { }

  newBox(box: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/createBox`, box);
  }

  getBoxList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/boxes`);
  }

  backCreateBox(id: number){
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
