import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavOneService {
  public appDrawer: any;

  constructor() {
  }

  public toggleNav() {
    this.appDrawer.toggle();
  }

}
