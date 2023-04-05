import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[title-basic-style]'
})
export class TitleBasicStyle {

  @HostListener('mouseenter') onMouseOver(){
    this.style('background-color', 'gray')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.style('background-color', 'black')
  }


  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { 
  }

  
  style(property: string, value: string){
    this._renderer.setStyle(this._elementRef.nativeElement, property, value);
  }


  call = this.style('background-color', 'black');
  call_1 = this.style('color', 'white');
  call_2 = this.style('font-variant', 'small-caps');
  call_3 = this.style('padding', '1em');
  call_4 = this.style('border-radius', '10px');
}
