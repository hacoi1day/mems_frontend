import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: unknown = '';
  public isLogin: boolean = false;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
    this.getToken();
  }

  getToken(): void {
    this.tokenService.getToken().subscribe(token => {
      this.token = token;
      if (token != '') {
        this.isLogin = true;
      }
    });
  }

  register(req): Observable<any> {
    return this.http.post(`${URL_API}/auth/register`, req);
  }

  login(req): Observable<any> {
    this.isLogin = true;
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
    this.isLogin = false;
    return this.http.get(`${URL_API}/auth/logout`, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    });
  }


}
