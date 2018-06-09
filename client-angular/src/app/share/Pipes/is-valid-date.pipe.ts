import { Pipe, PipeTransform } from '@angular/core';
import { getCookie } from '../../objects/Cookiee';
import { calculateDiffDays } from '../../objects/regex';

@Pipe({
  name: 'isValidDate'
})
// tslint:disable-next-line:class-name
export class isValidDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( value === undefined) { return false; }
    const date = calculateDiffDays(undefined, value);
    return (date >= 0 || value == null) ? false : true;
  }
}
