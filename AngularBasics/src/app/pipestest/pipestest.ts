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
  filtertext:string='';
  constructor(private studentservice:Studentservice){}

  ngOnInit(){
    this.students = this.studentservice.students;
    this.totalMarks = this.studentservice.totalMarks;
  }
}
