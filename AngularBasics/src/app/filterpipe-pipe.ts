import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './class/student';

@Pipe({
  name: 'filterpipe',
  standalone: false,
  pure:false
})
export class FilterpipePipe implements PipeTransform {

  transform(students: Student[],filtertext:string) {
    console.log("Filter pipe called");
    if(students.length===0 || filtertext ==='')
      return students;
    else {
     return students.filter((data)=>{
       return data.gender.toLowerCase() === filtertext.toLowerCase()
      })
    }
  }

}
