import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public token: BehaviorSubject<string>;

  constructor() {
    this.createToken();
  }

  createToken(): void {
    let token: string = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    this.token = new BehaviorSubject<string>(token);
  }

  getToken(): Observable<unknown> {
    return this.token.asObservable();
  }
  setToken(token: string): void {
    this.token.next(token);
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    this.token.next('');
    localStorage.removeItem('token');
  }
}
