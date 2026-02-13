import { EventEmitter, Injectable } from '@angular/core';
import { Loggerservice } from './loggerservice';

@Injectable()
export class Userservice {

  constructor(private logger:Loggerservice){}

  // users=[
  //   {name:'John',status:'active'},
  //   {name:'Mark',status:'inactive'},
  //   {name:'Stefan',status:'active'}
  // ]

  // adduser(username:string,userstatus:string){
  //   this.users.push({name:username,status:userstatus});
  //   this.logger.LogMessage(username,userstatus);
  // }

  products =[
    {id:1,name:"Pure Cotton Embroidered Kurta Set with Dupatta ",price:"₹1,699",color:"pink",available:"Available",image:'images/dress1.webp'},
    {id:2,name:"Myx Women's Pure Cotton Embroidered Kurta Set with Dupatta",price:"₹1,399",color:"off white",available:"Available",image:'images/dress2.webp'},
    {id:3,name:"GoSriKi Women's Cotton Blend Anarkali Embroidered Kurta with Pant & Dupatta",price:"₹651",color:"Blue",available:"Not Available",image:'images/dress3.webp'},
    {id:4,name:"GoSriKi Women's Rayon Blend Straight Embroidered Kurta with Pant & Dupatta",price:"₹809",color:"Purple",available:"Available",image:'images/dress4.webp'},
    {id:5,name:"KLOSIA Women's Rayon Printed Anarkali Kurta and Pant with Dupatta Set",price:"₹799",color:"Teal blue",available:"Not Available",image:'images/dress5.webp'},
    {id:6,name:"Klosia Women Solid Embroidery Kurta and pant set With Dupatta",price:"₹799",color:"brown",available:"Available",image:'images/dress6.webp'},
  ];

  onShowDetails = new EventEmitter<{id:number,name:string, price:string,color:string,available:string,image:string}>();

  ShowProductDetails(product:{id:number,name:string, price:string,color:string,available:string,image:string}){
    this.onShowDetails.emit(product);
  }

}
