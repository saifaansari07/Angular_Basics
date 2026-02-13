import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './class/student';

@Pipe({
  name: 'filterpipe',
  standalone: false,
})
export class FilterpipePipe implements PipeTransform {

  transform(students: Student[],filtertext:string) {
    if(students.length===0 || filtertext ==='')
      return students;
    else {
     return students.filter((data)=>{
       return data.gender.toLowerCase() === filtertext.toLowerCase()
      })
    }
  }

}
