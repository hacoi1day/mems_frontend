import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../models/contact";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${URL_API}/send-contact`, contact);
  }
}
