import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, HostBinding, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/shared/model/nav-item';
import { NavOneService } from 'src/app/shared/nav/nav-one.service';
import { NavTwoService } from 'src/app/shared/nav/nav-two.service';

const THEME_DARKNESS_SUFFIX = `-dark`;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
 
 
})
export class LayoutComponent implements OnInit {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  @ViewChild('appDrawer')
  appDrawer!: MatSidenav;
  @ViewChild('appDrawerTwo')
  appDrawerTwo!: ElementRef;
  show: boolean;
  themes: string[] = [
		"deeppurple-amber",
		"indigo-pink",
		"pink-bluegrey",
		"purple-green",
	];

  

  @HostBinding('class')
  activeThemeCssClass!: string;
	isThemeDark = false;
	activeTheme!: string;
  
  setActiveTheme(theme: string, darkness: boolean = null)  {
    if (darkness === null)
      darkness = this.isThemeDark
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return
    } else
      this.isThemeDark = darkness
    
    this.activeTheme = theme
    
    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme;
    
    const classList = this.overlayContainer.getContainerElement().classList
    if (classList.contains(this.activeThemeCssClass))
      classList.replace(this.activeThemeCssClass, cssClass)
    else
      classList.add(cssClass)
    
    this.activeThemeCssClass = cssClass
  }
  
  toggleDarkness() {
    this.setActiveTheme(this.activeTheme, !this.isThemeDark)
  }



  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    private navService: NavOneService,
    private navServiceTwo: NavTwoService,
    public ngZone: NgZone,
    public route: Router, ) {
      this.setActiveTheme('indigo-pink', false)
      this.show = false;
     }

  ngOnInit(): void {
  
  }



  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
    this.navServiceTwo.appDrawerTwo = this.appDrawerTwo;
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}






