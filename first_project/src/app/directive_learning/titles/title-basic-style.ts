import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[title-basic-style]'
})
export class TitleBasicStyle implements OnInit {

  @HostListener('mouseenter') onMouseOver(){
    this.style('background-color', this.bck_highlightcolor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.style('background-color', this.bck_defaultcolor)
  }

  @Input() bck_highlightcolor: string = 'gray';
  @Input() bck_defaultcolor: string = 'black';

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { 
  }

  
  style(property: string, value: string){
    this._renderer.setStyle(this._elementRef.nativeElement, property, value);
  }


  call = this.style('background-color', this.bck_defaultcolor);
  call_1 = this.style('color', 'white');
  call_2 = this.style('font-variant', 'small-caps');
  call_3 = this.style('padding', '1em');
  call_4 = this.style('border-radius', '10px');

  ngOnInit(): void {
    this.style('background-color', this.bck_defaultcolor);
  }
}
