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

  mouseover: boolean = false;
  keyupvalue: string = '';
  keyentervalue: string = '';

  keyupvalue_twoway: string = 'Two-Way Data Binding';

  myname: string = 'Fabio';

  onMouseOverOut(){
    this.mouseover = !this.mouseover;
  }

  onKeyUp(value:any){
    this.keyupvalue = value;
  }

  onKeyEnter(value:any){
    this.keyentervalue = value;
  }

  btnClick(){
    alert('Event Binding Button Clicked!');
  }

  ngOnInit(){}
}