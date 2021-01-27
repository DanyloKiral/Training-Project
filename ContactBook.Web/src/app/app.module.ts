import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationHeaderComponent} from './navigation-header.component';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
