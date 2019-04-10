import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('inside the pipe', args);
    return value[args].toUpperCase();
  }
}
