import { Component } from '@angular/core';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-showproduct',
  standalone: false,
  templateUrl: './showproduct.html',
  styleUrl: './showproduct.css',
})
export class Showproduct {

  constructor(private userservice:Userservice){}

  product!: {id:number,name:string, price:string,color:string,available:string,image:string};

  ngOnInit(){
     this.userservice.onShowDetails.subscribe((data:{id:number,name:string, price:string,color:string,available:string,image:string})=>{
      this.product = data;
     });
  }

}
