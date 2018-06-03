import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTitle'
})
export class LimitTitlePipe implements PipeTransform {
  maxlenght=300;

  transform(value: string, args?: any): any {
    return (value.length > this.maxlenght)?(value.substring(0,this.maxlenght)+"...."):value;
  }

}
