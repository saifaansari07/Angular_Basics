import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: false,
  // <div class="alert alert-success" [hidden]="displayNotication">
  template: `<div class="alert alert-success" [ngClass]="{fadeOut:displayNotication}">
                This website uses cookies to provide better user experience
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: ["div{margin: 00px 0px;padding:0px 5px;text-align:center;}",
    ".close{float:right;margin-top:-9px;}",
    ".fadeOut {visibility:hidden;opacity:0;transition:visibility 0s 2s, opacity 2s linear;}"
  ],
})
export class Notification {

  displayNotication : boolean = false;

  closeNotification(){
    this.displayNotication=true;
  }
}
