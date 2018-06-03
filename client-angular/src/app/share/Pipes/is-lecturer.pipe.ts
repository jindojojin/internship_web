import { Pipe, PipeTransform } from '@angular/core';
import { getCookie } from '../../objects/Cookiee';

@Pipe({
  name: 'isLecturer'
})
export class IsLecturerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (getCookie("userType")== "lecturer")?true:false;
  }

}
