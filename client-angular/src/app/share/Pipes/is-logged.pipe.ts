import { Pipe, PipeTransform } from '@angular/core';
import { getCookie } from '../../objects/Cookiee';

@Pipe({
  name: 'isLogged'
})
export class IsLoggedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (getCookie("userID")!= null)?true:false;
  }

}
