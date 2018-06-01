import { Pipe, PipeTransform } from '@angular/core';
import { myWebsiteDomain } from '../../objects/appConfig';

@Pipe({
  name: 'imageFromServer'
})
export class ImageFromServerPipe implements PipeTransform {

  transform(value: any): string {
    return (value != null && value!="")?(myWebsiteDomain.toString() + value.toString()):"https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png";
  } 

}
