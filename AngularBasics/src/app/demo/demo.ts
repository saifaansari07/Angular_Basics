import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{

  // sayhello(inputEle: HTMLInputElement){
  //   alert("Hello "+inputEle.value);
  // }

  // sayhello(){
  //   console.log("hello from demo component");
  // }


  @Input() data:string='science'

  constructor() {
    console.log("Constructor called.");
    console.log(this.data);
  }

  ngOnInit(){
    console.log("ngOnInit called.");
    console.log(this.data);
  }

  ngOnChanges(){
    console.log("ngOnChange called.");
  }

  ngDoCheck(){
    console.log("ngDoCheck called.");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called.");
    console.log(this.paragrph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called.");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called.");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called.");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called.");
  }

  @ContentChild('paragraph') paragrph !: ElementRef;

  
  
}
