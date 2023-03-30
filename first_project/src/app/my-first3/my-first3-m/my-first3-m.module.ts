import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyFirstCComponent } from "../my-first-c/my-first-c.component";
import { MyFirst3SService } from "../my-first3-s/my-first3-s.service";

@NgModule({
  declarations: [MyFirstCComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstCComponent
  ],
  providers: [
    MyFirst3SService
  ]
})
export class MyFirst3MModule { }
