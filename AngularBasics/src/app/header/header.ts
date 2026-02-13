import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  slogan:string =`Your One Stop
    Shop for
  everything.`;

  source : string ="images/esopping.jpg";

  getslogan(){
    return "New Slogan"
  }
}
