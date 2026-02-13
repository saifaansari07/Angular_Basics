import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:'app-nav',
  //selector: '[app-nav]', // html attribute
  //selector: '.app-nav', // css attibute
  standalone: false,
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav {

  sitename : string ="eShopping"

  constructor(private activateroute:ActivatedRoute){}

  ngOnInit(){
    this.activateroute.fragment.subscribe((params)=>{
      console.log(params);
      this.jumpTo(params);
    })
  }

  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }
}
