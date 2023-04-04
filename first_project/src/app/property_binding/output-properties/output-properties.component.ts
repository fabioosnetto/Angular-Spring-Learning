import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit{
  constructor(){}

  @Input('value') resultvalue: number = 0;
  @Output('changevalue') changevalue = new EventEmitter();
  @ViewChild('outputinput') output!: ElementRef;

  sumValue(){
    this.resultvalue ++;
    console.log(this.output.nativeElement.value);
    this.changevalue.emit({newvalue: this.resultvalue});
  }

  decreaseValue(){
    this.resultvalue --;
    console.log(this.output.nativeElement.value);
    this.changevalue.emit({newvalue: this.resultvalue});
  }

  

  ngOnInit(){}
}
