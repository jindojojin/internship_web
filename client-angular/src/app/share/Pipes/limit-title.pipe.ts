import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTitle'
})
export class LimitTitlePipe implements PipeTransform {
  maxlength=300;

  transform(value: string, args?: any): any {
    return (value.length > this.maxlength)?(value.substring(0,this.maxlength)+"...."):value;
  }

}
