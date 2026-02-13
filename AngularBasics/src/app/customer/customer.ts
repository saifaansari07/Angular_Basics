import { Component } from '@angular/core';
import { cust } from './cust';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

  selectedCustomer:any;

  customers:cust[] = [
    {CustomerNo:1,name:"Mark Vought",address:'',city:'London',country:'UK'},
    {CustomerNo:2,name:"John Smith",address:'',city:'new York',country:'USA'},
    {CustomerNo:3,name:"Merry Ann",address:'',city:'Berlin',country:'Germany'},
    {CustomerNo:4,name:"Rajesh Khatri",address:'',city:'Mumbai',country:'India'},
    {CustomerNo:5,name:"Rahul Raj",address:'',city:'Delhi',country:'India'}
  ]

}
