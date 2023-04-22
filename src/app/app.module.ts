import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './view/home-pg/home-pg.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './other components/nav/nav.component';
import { HeaderComponent } from './other components/header/header.component';
import { SliderComponent } from './other components/slider/slider.component';
import { CardsComponent } from './other components/cards/cards.component';
import { SlotsModule } from './slots/slots.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent,
    NavComponent,
    HeaderComponent,
    SliderComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlotsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
