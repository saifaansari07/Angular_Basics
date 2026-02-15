import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: false,
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {

  title='Template-Driven Form';
  firstname!:string;
  lastname!:string;
  email!:string;
  gen!:string;
  country!:string;
  defaultGender='Male';
  gender = [
    {id:'1',value: 'Male'},
    {id:'2',value: 'Female'},
    {id:'3',value:'Other'}
  ];
  selectedhobbies!:[];


  @ViewChild('myform') form !:NgForm;

  onSubmit(){
    console.log(this.form);
    this.firstname = this.form.value.personalDetails.firstName;
    this.lastname = this.form.value.personalDetails.lastName;
    this.email = this.form.value.personalDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    if(this.form.value.hobbies){
      this.selectedhobbies = Array.isArray(this.form.value.hobbies) ? this.form.value.hobbies : [this.form.value.hobbies];
    }
    this.form.reset();
  }

  setDefautlValues(){
    // this.form.value.personalDetails.firstname='John';
    // this.form.value.personalDetails.lastname = 'Deo';
    // this.form.value.personalDetails.email = 'john-deo@gmail.com';

    // this.form.setValue({
    //   country:'',
    //   gender:'',
    //   hobbies:'',
    //   personalDetails:{
    //     firstName:'John',
    //     lastName:'Deo',
    //     email:'john.deo@gmail.com'
    //     }
    // })

    this.form.form.patchValue({
      personalDetails:{
        firstName:'John',
        lastName:'Deo',
        email:'john.deo@gmail.com'
      }
    })
  }
}
