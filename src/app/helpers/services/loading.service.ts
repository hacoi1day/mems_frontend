import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isShow: BehaviorSubject<boolean>;

  constructor() {
    this.isShow = new BehaviorSubject<boolean>(false);
  }

  get(): Observable<boolean> {
    return this.isShow.asObservable();
  }

  show(): void {
    this.isShow.next(true);
  }

  hide(): void {
    this.isShow.next(false);
  }

}
