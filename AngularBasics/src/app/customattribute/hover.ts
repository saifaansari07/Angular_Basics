import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false,
})
export class Hover {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseover') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement,'margin','5px 10px');
    this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  }

  
  @HostListener('mouseleave') onmouseout(){
    this.renderer.setStyle(this.element.nativeElement,'margin','10px 20px');
    this.renderer.setStyle(this.element.nativeElement,'padding','10px 20px');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');
  }
}

