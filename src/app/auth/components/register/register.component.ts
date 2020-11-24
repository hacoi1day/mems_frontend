import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formRegister = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit(event): void {
    let req = this.formRegister.value;
    this.authService.register(req).subscribe(res => {
      console.log(res);
      this.router.navigate(['/auth/login']).then(res => {
        console.log(res);
      });
    });
  }

}
