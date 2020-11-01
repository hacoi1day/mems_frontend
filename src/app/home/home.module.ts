import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home.routing.module";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MembersComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
  ],
  providers: [

  ]
})
export class HomeModule { }
