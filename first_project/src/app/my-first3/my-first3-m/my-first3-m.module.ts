import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { MyFirstModule } from "src/app/my-first/my-first/my-first.module";

import { MyFirstCComponent } from "../my-first-c/my-first-c.component";
import { MyFirst3SService } from "../my-first3-s/my-first3-s.service";
import { PropBindComponent } from "../../property_binding/prop-bind/prop-bind.component";
import { InputPropertyComponent } from "../../property_binding/input-property/input-property.component";
import { PropBindContentService } from "src/app/property_binding/content-service/prop-bind-content.service";
import { OutputPropertiesComponent } from "src/app/property_binding/output-properties/output-properties.component";
import { TitleBasicStyle } from "src/app/directive_learning/titles/title-basic-style";
import { TextBasicStyle } from "src/app/directive_learning/text/text-basic-style.directive";
import { NgElseDirective } from "src/app/directive_learning/ngElse/ng-else.directive";

import { EventBroadcastService } from "src/app/property_binding/broadcast-services/event-broadcast.service";
import { NumMarkerPipe } from "src/app/property_binding/pipes/num-marker.pipe";


@NgModule({
  declarations: [
    InputPropertyComponent,
    OutputPropertiesComponent,
    MyFirstCComponent,
    PropBindComponent,
    TitleBasicStyle,
    TextBasicStyle,
    NgElseDirective,
    NumMarkerPipe
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
    PropBindContentService,
    /*EventBroadcastService*/
  ]
})
export class MyFirst3MModule { }
