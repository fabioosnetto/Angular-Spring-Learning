import { Component, Input, OnInit } from '@angular/core'

@Component({
   selector: 'my-first-component',
   template: `<span>, Fabio!</span>`
})

export class MyFirstComponent implements OnInit{
   constructor(){}

   @Input('thename') name: string = '';
   @Input('othername') name2 : string = '';

   ngOnInit(){}
}