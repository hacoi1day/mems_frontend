import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import { TopComponent } from './components/top/top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import {HelpersModule} from "./helpers/helpers.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    HelpersModule,
    HomeModule,
    AuthModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
