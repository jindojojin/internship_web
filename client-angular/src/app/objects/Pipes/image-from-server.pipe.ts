import { Pipe, PipeTransform } from '@angular/core';
import { myWebsiteDomain } from '../appConfig';

@Pipe({
  name: 'imageFromServer'
})
export class ImageFromServerPipe implements PipeTransform {

  transform(value: any): string {
    return (value != null && value!="")?(myWebsiteDomain.toString() + value.toString()):myWebsiteDomain.toString();
  } 

}
