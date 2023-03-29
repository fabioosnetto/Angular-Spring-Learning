import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyFirstCComponent } from "../my-first-c/my-first-c.component";

@NgModule({
  declarations: [MyFirstCComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstCComponent
  ]
})
export class MyFirst3MModule { }
