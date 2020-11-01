import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onLogin(): void {
    let value = this.formLogin.value;
    this.authService.login(value).subscribe(res => {
      console.log(res);
    });
  }

}
