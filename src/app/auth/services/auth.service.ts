import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(req): Observable<any> {
    return this.http.post(`${URL_API}/auth/login`, req);
  }
}
