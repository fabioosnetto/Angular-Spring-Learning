import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MyFirstModule } from "src/app/my-first/my-first/my-first.module";
import { MyFirstCComponent } from "../my-first-c/my-first-c.component";
import { MyFirst3SService } from "../my-first3-s/my-first3-s.service";
import { PropBindComponent } from "../../property_binding/prop-bind/prop-bind.component";
import { InputPropertyComponent } from "../../property_binding/input-property/input-property.component";
import { PropBindContentService } from "src/app/property_binding/content-service/prop-bind-content.service";

@NgModule({
  declarations: [
    InputPropertyComponent,
    MyFirstCComponent,
    PropBindComponent
  ],
  imports: [
    MyFirstModule,
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
