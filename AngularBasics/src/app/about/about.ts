import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(private router:Router,private activatedrouter:ActivatedRoute){}
  navigatehome(){
    this.router.navigate(['/header'],{relativeTo:this.activatedrouter});
    //this.router.navigateByUrl('home');
  }
}
