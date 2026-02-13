import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userservice } from '../../userservice';

@Component({
  selector: 'app-singleproduct',
  standalone: false,
  templateUrl: './singleproduct.html',
  styleUrl: './singleproduct.css',
})
export class Singleproduct implements OnInit{
 productId:number=0;product:any;
 editmode:boolean=false;
  constructor(private router:ActivatedRoute,private productservice:Userservice,private route:Router){}

  ngOnInit():void{
    this.productId=Number(this.router.snapshot.paramMap.get('id'));
    console.log('Route ID:', this.productId);
    this.product= this.productservice.products.find(x=>x.id===this.productId);
    console.log('Route:', this.product);

    //snapshot
    //this.editmode = Boolean(this.router.snapshot.queryParamMap.get('edit'));
    //console.log(this.editmode);

    this.router.queryParamMap.subscribe((params)=>{
      this.editmode=Boolean(params.get('edit'));
    })
  }

  onEditBtn(){
    this.route.navigate(['Product/Singleproduct',this.productId],{queryParams:{edit:true}});
  }


}
