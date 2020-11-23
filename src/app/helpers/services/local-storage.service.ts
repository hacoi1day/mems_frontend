import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, startWith, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private readonly keySubject = new Subject<string>();

  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    this.keySubject.next(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    this.keySubject.next(key);
  }

  clear() {
    const keys = Object.keys(localStorage);
    localStorage.clear();
    keys.forEach(key => this.keySubject.next(key));
  }

  getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  observeItem<T>(key: string): Observable<T> {
    return this.keySubject.pipe(
      filter(k => k === key),
      startWith(null),
      map(_ => JSON.parse(localStorage.getItem(key))),
    );
  }
}
