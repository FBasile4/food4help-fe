import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/v1'; /*contiene la baseUrl corrispondente con il be*/


  constructor(private http: HttpClient) {

  }

 /* getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/home/register`, user);
  }

  loginUser(email:any, password:any): Observable<Object> {
    return this.http.post(`${this.baseUrl}+'/home/login`, email, password);
    console.log(email,password);

  }
}