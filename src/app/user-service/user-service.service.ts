import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/v1'; /*contiene la baseUrl corrispondente con il be*/


  constructor(private http: HttpClient) {  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/home/register`, user);
  }

  loginUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/home/login`, user);
    console.log(user);
  }

  getUsersByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/name/${name}`);
  }
}
