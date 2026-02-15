import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: false,
})
export class PercentagePipe implements PipeTransform {
  transform(value: number,totalmarks:number,decimal:number) {
    console.log("Percentage pipe called");
    return (value/totalmarks*100).toFixed(decimal);
  }

}
