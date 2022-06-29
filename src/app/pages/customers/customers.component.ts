import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @ViewChild('searchbar')
  searchbar!: ElementRef;
  searchText = '';
 
  toggleSearch:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSearch(){
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose(){
    this.searchText = '';
    this.toggleSearch = false;
  }

}
