import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchproduct',
  standalone: false,
  templateUrl: './searchproduct.html',
  styleUrl: './searchproduct.css',
})
export class Searchproduct {

  enteredSearchValue:string="";

  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
