import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from "../my-first.component";


@NgModule({
  declarations: [
    MyFirstComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstComponent
  ]
})
export class MyFirstModule { }
