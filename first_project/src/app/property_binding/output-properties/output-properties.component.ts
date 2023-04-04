import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit{
  constructor(){}

  @Input('value') resultvalue: number = 0;
  @Output('changevalue') changevalue = new EventEmitter();


  sumValue(){
    this.resultvalue ++;
    this.changevalue.emit({newvalue: this.resultvalue});
  }

  decreaseValue(){
    this.resultvalue --;
    this.changevalue.emit({newvalue: this.resultvalue});
  }

  ngOnInit(){}
}
