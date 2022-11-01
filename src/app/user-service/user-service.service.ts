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


  user: User=new User();

  constructor(private http: HttpClient) {  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/home/register`, user);
  }

  loginUser(userpwd: string): Observable<any> {
    userpwd = this.user.name + this.user.password;
    return this.http.get(`${this.baseUrl}/home/login/${userpwd}`);
    console.log(userpwd);
  }

  getUsersByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/name/${name}`);
  }
}
