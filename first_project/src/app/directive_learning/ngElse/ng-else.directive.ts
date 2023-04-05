import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set appNgElse(condition: boolean){
    if (!condition) {
      this._viewcontainerref.createEmbeddedView(this._templateref);
    }else{
      this._viewcontainerref.clear();
    }
  }

  constructor(
    private _viewcontainerref: ViewContainerRef,
    private _templateref: TemplateRef<any>) { }

}
