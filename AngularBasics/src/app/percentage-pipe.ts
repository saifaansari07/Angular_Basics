import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: false,
})
export class PercentagePipe implements PipeTransform {
  transform(value: number,totalmarks:number,decimal:number) {
    return (value/totalmarks*100).toFixed(decimal);
  }

}
