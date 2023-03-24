import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirst2Component } from './my-first2/my-first2.component';
import { MyFirstModule } from "./my-first/my-first/my-first.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyFirst2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
