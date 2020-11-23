import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(req): Observable<any> {
    return this.http.post(`${URL_API}/auth/register`, req);
  }

  login(req): Observable<any> {
    return this.http.post(`${URL_API}/auth/login`, req);
  }

  me(): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get(`${URL_API}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  logout(): Observable<any> {
    let token = localStorage.getItem('token');
    localStorage.clear();
    return this.http.get(`${URL_API}/auth/logout`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }


}
