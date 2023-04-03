import { Component, OnInit } from '@angular/core';
import { PropBindContentService } from '../content-service/prop-bind-content.service';

@Component({
  selector: 'prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent implements OnInit {
  interpolation: string = '';

  constructor(private propbindservie : PropBindContentService){
    this.interpolation = this.propbindservie.getInterpolationContent();
  }

  ngOnInit(){}
}