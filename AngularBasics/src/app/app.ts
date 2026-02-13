import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Demo } from './demo/demo';
import { Userservice } from './userservice';
import { Loggerservice } from './loggerservice';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  providers:[Userservice]
})
export class App {
  //protected readonly title = signal('AngularBasics');
  title = "Angular Basic";
  message="Angular is a javascript framework, used to build client0side application"

  
 @ViewChild('dobinput') dateOfBirth?:ElementRef;

 @ViewChild('ageinput') age!:ElementRef;

 @ViewChild(Demo,{static:true}) democomp!: Demo;
 calculateAge(){
  let birthyear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
  let currentyear= new Date().getFullYear();

  let age = currentyear - birthyear;

  this.age.nativeElement.value = age;
  // console.log(this.dateOfBirth);
  // console.log(this.age);
 }

 inputtext:string="";

 destroy:boolean=true;

 OnSubmit(data:HTMLInputElement){
  this.inputtext= data.value;
 }

 destroycomp(){
  this.destroy=false;
 }

 //users:{name:string, status:string}[]=[]

products:{id:number,name:string, price:string,color:string,available:string,image:string}[]=[];

 constructor(private userservice:Userservice,private logger:Loggerservice){}
  
 observable = new Observable((observer)=>{
  setTimeout(()=>{observer.next("1")},1000)
  setTimeout(()=>{observer.next("2")},2000)
  setTimeout(()=>{observer.next("3")},3000)
  setTimeout(()=>{observer.error(new Error('Something went wrong. Please try again!'))},3000)
  setTimeout(()=>{observer.next("4")},4000)
  setTimeout(()=>{observer.next("5")},5000)
  setTimeout(()=>{observer.complete()},3000)
 });

 
  

 ngOnInit(){
  //this.users= this.userservice.users;
  // this.products = this.userservice.products;
  // this.observable.subscribe((val)=>{
  //   console.log(val);
  // },(error)=>{
  //   alert(error.message);
  // },()=>{
  //   alert("Observable has complete emitting all values.");
  // })
 }

 showdetails(product:{id:number,name:string, price:string,color:string,available:string,image:string}){
  this.userservice.ShowProductDetails(product);
 }

}
