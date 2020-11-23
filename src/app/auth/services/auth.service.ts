import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string = '';

  constructor(
    private http: HttpClient
  ) {
    this.getToken();
  }

  getToken(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.token = token;
    }
  }

  saveToken(token): void {
    this.token = token;
  }

  register(req): Observable<any> {
    return this.http.post(`${URL_API}/auth/register`, req);
  }

  login(req): Observable<any> {
    return this.http.post(`${URL_API}/auth/login`, req);
  }

  me(): Observable<any> {
    return this.http.get(`${URL_API}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    })
  }

  logout(): Observable<any> {
    localStorage.clear();
    return this.http.get(`${URL_API}/auth/logout`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
  }


}
