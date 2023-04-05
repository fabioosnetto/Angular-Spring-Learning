import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numMarker',
  pure: false
})
export class NumMarkerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let result = '|' + value;
    
    return result;
  }

}
