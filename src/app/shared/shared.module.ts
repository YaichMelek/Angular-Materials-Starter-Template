import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomMaterialModule } from './custom-material/custom-material/custom-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CustomMaterialModule
  ]
})
export class SharedModule { }
