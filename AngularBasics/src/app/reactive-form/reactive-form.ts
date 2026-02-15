import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm implements OnInit{

  title ='Reactive Form';
  reactiveFrom!:FormGroup;
  formStatus!:string;

  ngOnInit(){
    this.reactiveFrom = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl('',{validators:[Validators.required,this.noSpaceAllowed],nonNullable:true}),
        lastname : new FormControl(null,Validators.required),
        email : new FormControl(null,[Validators.required,Validators.email])
      }),
      // firstname: new FormControl(null,[Validators.required]),
      // lastname : new FormControl(null,Validators.required),
      // email : new FormControl(null,[Validators.required,Validators.email]),
      country: new FormControl(null),
      gender : new FormControl(null),
      hobbies : new FormControl(null),
      skills: new FormArray([
        new FormControl(null,Validators.required),
      ])
    });

    // this.reactiveFrom.get('personalDetails.firstname')?.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    // this.reactiveFrom.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    this.reactiveFrom.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus= value;
    })

  //   setTimeout(()=>{
  //     this.reactiveFrom.setValue({
  //       personalDetails:{
  //         firstname:'',
  //         lastname:'',
  //         email:'abc@example.com'
  //       },
  //       gender:'',
  //       country:'',
  //       hobbies:'',
  //       skills:[]
  //     });
  //   },4000)
  // }
    
  setTimeout(()=>{
    this.reactiveFrom.patchValue({
      personalDetails:{
        email:'abc@example.com'
      },
    });
  },4000)

  

}

  get skills():FormArray{
    return this.reactiveFrom.get('skills') as FormArray;
  }

  addSkills(){
    (this.reactiveFrom.get('skills') as FormArray)?.push(new FormControl(null,Validators.required));
  }

  noSpaceAllowed=(control:AbstractControl):{[key:string]:boolean} | null=>{
    if(control.value!=null && control.value.indexOf(' ')!=-1)
      return {noSpaceAllowed:true}
    return null;
  }



  onSubmit(){
    console.log(this.reactiveFrom);
    this.reactiveFrom.reset({
      personalDetails:{
              firstname:'',
              lastname:'',
              email:''
            },
            gender:'Male',
            country:'',
            hobbies:'',
            skills:[]
          })
  }
}
