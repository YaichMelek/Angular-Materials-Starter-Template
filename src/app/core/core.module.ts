import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../shared/custom-material/custom-material/custom-material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';





@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CustomMaterialModule,
    SharedModule
  ]
})
export class CoreModule { }
