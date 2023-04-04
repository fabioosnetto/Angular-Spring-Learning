import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit{
  constructor(){}

  @Input('var1') variable1: string = '';
  @Input('var2') variable2: string = '';
  @Input('var3') variable3: string = '';

  ngOnInit(){}
}
