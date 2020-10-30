import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home.routing.module";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [

  ]
})
export class HomeModule { }
