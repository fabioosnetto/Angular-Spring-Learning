import { Directive, ElementRef, Renderer2, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[text-basic-style]'
})
export class TextBasicStyle implements OnInit {

  @HostListener('mouseenter') onMouseOver(){this.styles = 'red'}
  @HostListener('mouseleave') onMouseLeave(){this.styles = 'white'}

  @HostBinding('style.color') styles!: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {  }

  style(property: string, value: string){
    this._renderer.setStyle(this._elementRef.nativeElement, property, value);
  }


  call_0 = this.style('background-color', '#161616');
  call_1 = this.style('padding', '1em');
  call_3 = this.style('border-radius', '10px');

  ngOnInit(){
    this.styles = 'white';
  }
}
