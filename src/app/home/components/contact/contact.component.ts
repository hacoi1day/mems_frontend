import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/contact";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formContact = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      message: ['']
    });
  }

  onSendContact(): void {
    let formValue = this.formContact.value;
    let contact = new Contact(formValue.name, formValue.email, formValue.phone, formValue.message);
    this.contactService.sendContact(contact).subscribe(res => {
      Swal.fire('Thank you !', 'You submitted succesfully!', 'success');
      this.formContact.reset();
    });
  }

}
