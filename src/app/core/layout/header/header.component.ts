import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavOneService } from 'src/app/shared/nav/nav-one.service';
import { NavTwoService } from 'src/app/shared/nav/nav-two.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { map, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';

const THEME_DARKNESS_SUFFIX = `-dark`;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        width: '300px',
      })),
      state('hide', style({
        width: '0px',
      })),
      transition('show => hide', [
        animate('0.2s')
      ]),
      transition('hide => show', [
        animate('0.2s')
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit {
  show: boolean;
  searchControl: FormControl;
  search : String ="";

  @HostBinding('class')
  activeThemeCssClass!: string;
  isThemeDark = false
  activeTheme!: string;
  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  )
  constructor(private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,public navService: NavOneService, public navServiceTwo: NavTwoService ) {
      this.setActiveTheme('indigo-pink', false)
      this.show = false;
    this.searchControl = new FormControl();
    this.searchControl.setValue('');
   }

  ngOnInit(): void {
  }

  setActiveTheme(theme: string, darkness: boolean = true) {
    if (darkness === null)
      darkness = this.isThemeDark
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return
    } else
      this.isThemeDark = darkness
    
    this.activeTheme = theme
    
    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme
    
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

  isOpen() {
    if (this.show) {
      this.show = false;
      this.searchControl.setValue('');
    } else {
      this.show = true;
    }
  }
  
  clear() {
    this.searchControl.setValue('');
  }


}
