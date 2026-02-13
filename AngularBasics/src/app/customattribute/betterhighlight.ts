import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]',
  standalone: false,
})
export class Betterhighlight {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.background') background:string='transparent';
  @HostBinding('style.border') border:string='none'

  @HostListener('mouseenter') onmouseenter(){
    this.background='pink'
    this.border='2px solid black'
  }

  @HostListener('mouseleave') onmouseleave(){
    this.background='transparent'
    this.border='none'
  }
}
