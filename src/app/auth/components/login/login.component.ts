import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../../helpers/services/loading.service";

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
    private loadingService: LoadingService,
    private router: Router
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
    this.loadingService.show();
    let value = this.formLogin.value;
    this.authService.login(value).subscribe(res => {
      // get user
      let {access_token, user} = res;
      // change token in auth service
      this.authService.saveToken(access_token);
      // save token and user to localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      this.loadingService.hide();
      // navigate to home
      this.router.navigate(['/home']).then();
    });
  }

}
