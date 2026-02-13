import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) {
   }

   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'background','cyan');
    this.renderer.addClass(this.element.nativeElement,'container');
    this.renderer.setAttribute(this.element.nativeElement,'title','Renderer2')
   }

}
