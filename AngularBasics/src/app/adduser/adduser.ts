import { Component } from '@angular/core';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-adduser',
  standalone: false,
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',

})
export class Adduser {

  username:string='';
  userstatus:string='';

  constructor(private userservice:Userservice){}

  // adduser(){
  //   this.userservice.adduser(this.username,this.userstatus);
  // }
}
