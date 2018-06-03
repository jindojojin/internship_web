import { Pipe, PipeTransform } from '@angular/core';
import { getCookie } from '../../objects/Cookiee';

@Pipe({
  name: 'isAdmin'
})
export class IsAdminPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (getCookie("userType")== "admin")?true:false;
  }

}
