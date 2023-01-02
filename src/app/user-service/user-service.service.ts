import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/v1'; /*contiene la baseUrl corrispondente con il be*/
  private baseUrl_UserLogged = 'http://localhost:8084/api/userlogged'; /*contiene la baseUrl corrispondente con il be*/


  user: User;

  constructor(private http: HttpClient) {  }


  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUserCharity(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/home/charity/create`, user);
  }

  createUserWorkingActivity(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/home/workingActivity/create`, user);
  }

  loginUserW(userpwd: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/home/workingActivity/login/${userpwd}`);
    if(this.http.get(`${this.baseUrl}/home/workingActivity/login/${userpwd}`) === null){
      userpwd = '';
      console.log('Utente a NULL');
    }
  }

  loginUserC(userpwd: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/home/charity/login/${userpwd}`);
    if(this.http.get(`${this.baseUrl}/home/charity/login/${userpwd}`) === null){
      userpwd = '';
      console.log('Utente a NULL');
    }
  }

  getUsersCharityByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/charity/name/${name}`);
  }

  getUsersWorkingActivityByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/workingActivity/name/${name}`);
  }

  //-------------------UserLogged----------------

  saveUserLogged(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl_UserLogged }` + `/create`, user);
  }

  getUserLogged(): Observable<any>{
    return this.http.get(`${this.baseUrl_UserLogged}/getuser`);
  }

  deleteUser(){
    return this.http.delete(`${this.baseUrl_UserLogged}/delete`, { responseType: 'text' });
  }

  //------------------LOGIN WITH GOOGLE-------------
  sendCredential(credential: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/workingactivity/login/google/${credential}`);
    if(this.http.get(`${this.baseUrl}/workingactivity/google/${credential}`) === null){
      credential = '';
      console.log('Utente a NULL');
    }
  }

}
