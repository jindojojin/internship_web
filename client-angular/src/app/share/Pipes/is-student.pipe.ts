import { Pipe, PipeTransform } from '@angular/core';
import { getCookie } from '../../objects/Cookiee';

@Pipe({
  name: 'isStudent'
})
export class IsStudentPipe implements PipeTransform {

  transform(): boolean {
    return (getCookie("userType")== "student")?true:false;
  }

}
