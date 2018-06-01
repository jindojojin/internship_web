import { Pipe, PipeTransform } from '@angular/core';
import { getCookie } from '../../objects/Cookiee';

@Pipe({
  name: 'isPartner'
})
export class IsPartnerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (getCookie("userType")== "partner")?true:false;
  }

}
