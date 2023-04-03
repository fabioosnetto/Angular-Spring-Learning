import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropBindContentService {

  constructor() { }

  getInterpolationContent(){
    return 'Class binding with interpolation';
  }
}
