import { Component } from '@angular/core';
import { Student } from '../class/student';
import { Studentservice } from '../service/studentservice';

@Component({
  selector: 'app-pipestest',
  standalone: false,
  templateUrl: './pipestest.html',
  styleUrl: './pipestest.css',
})
export class Pipestest {

  title='Angular Pipes';
  students!:Student[];
  totalMarks!:number;
  // filtertext:string='';
  _filtertext:string='';
  filteredStudent!:Student[];

  totalStudent = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.filteredStudent.length)
    },1000);
  })

  get filtertext(){
    return this._filtertext;
  }
  set filtertext(value:string){
    this._filtertext = value;
   this.filteredStudent =this.filterStudentByGender(value);
  }


  constructor(private studentservice:Studentservice){}

  ngOnInit(){
    this.students = this.studentservice.students;
    this.totalMarks = this.studentservice.totalMarks;
    this.filteredStudent= this.students;
  }

  addStudent(){
    // let stdcopy = Object.assign([],this.students);
    // stdcopy.push({name:'Test',course:'MBA',marks:520,DOB:new Date(),gender:'Female'});
    // this.students=stdcopy;

    this.students.push({name:'Test',course:'MBA',marks:520,DOB:new Date(),gender:'Female'});
    this.filteredStudent= this.filterStudentByGender(this.filtertext);
  }

  changeGender(){
    this.students[0].gender='Female'; 
    this.filteredStudent = this.filterStudentByGender(this.filtertext);
    //let stdcopy = Object.assign([],this.students);
    // let stdcopy = [...this.students]; //shallow copy --> create the array copy into a new array
    // console.log(stdcopy);
    // stdcopy[0].gender ='Female';
    // this.students=stdcopy;
  }

  MouseOver(){}

  filterStudentByGender(filterterm:string){
    if(this.students.length===0 || this.filtertext==="")
      return this.students;
    else{
      return this.students.filter((std)=>{
        return std.gender.toLowerCase() === filterterm.toLowerCase()
      })
    }
  }


}
