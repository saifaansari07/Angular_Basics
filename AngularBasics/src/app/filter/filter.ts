import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {

  
  @Input("total") all:number =0;
  @Input()available:number=0;
  @Input() notavailable:number=0;

  selectedRadiobuttonvalue:string='All';

  @Output()
  filterRadioBtnSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

  OnRadioBtnSelectionChanged(){
    this.filterRadioBtnSelectionChanged.emit(this.selectedRadiobuttonvalue);
  }

}
