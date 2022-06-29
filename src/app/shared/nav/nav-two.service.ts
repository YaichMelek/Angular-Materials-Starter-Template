import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavTwoService {
  public appDrawerTwo: any;

  constructor() {
  }

  public toggleNavTwo() {
    this.appDrawerTwo.toggle();
  }

}
