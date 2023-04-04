import { Component, Input, OnInit } from '@angular/core'

@Component({
   selector: 'my-first-component',
   template: `<span>, Fabio!</span>`
})

export class MyFirstComponent implements OnInit{

   @Input('thename') name = '';
   @Input('othername') name2 = '';

   ngOnInit(){}
}