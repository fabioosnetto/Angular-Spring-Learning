import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MyFirstCComponent } from "../my-first-c/my-first-c.component";
import { MyFirst3SService } from "../my-first3-s/my-first3-s.service";
import { PropBindComponent } from "../../property_binding/prop-bind/prop-bind.component";
import { PropBindContentService } from "src/app/property_binding/content-service/prop-bind-content.service";

@NgModule({
  declarations: [
    MyFirstCComponent,
    PropBindComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyFirstCComponent,
    PropBindComponent
  ],
  providers: [
    MyFirst3SService,
    PropBindContentService
  ]
})
export class MyFirst3MModule { }
