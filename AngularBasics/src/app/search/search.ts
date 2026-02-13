import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  searchvalue : string ="";

  getvalue(eventdata : Event){
    //console.log((eventdata.target as HTMLInputElement).value);
    this.searchvalue = (eventdata.target as HTMLInputElement).value;
  }
}
