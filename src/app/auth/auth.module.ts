import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthRoutingModule} from "./auth.routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
