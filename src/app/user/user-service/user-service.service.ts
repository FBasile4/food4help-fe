import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/users'; /*contiene la baseUrl corrispondente con il be*/

  user: User;

  constructor(private http: HttpClient) {

  }

 /* getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/add`, user);
  }*/

  loginUser(email:any, password:any): Observable<any> {
    const authData: User = {email:email, password: password }
    return this.http.post(`${this.baseUrl}` + `/home/login`, authData);
    console.log(authData);

  }
}
