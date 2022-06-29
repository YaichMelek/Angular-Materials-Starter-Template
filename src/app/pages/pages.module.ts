import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';
import { CrudComponent } from './customers/crud/crud.component';
import { AddComponent } from './customers/crud/add/add.component';
import { LogComponent } from './log/log.component';
import { ProfilComponent } from './profil/profil.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CustomersComponent,
    CrudComponent,
    AddComponent,
    LogComponent,
    ProfilComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CustomMaterialModule,
    FlexLayoutModule,
    NgChartsModule,
    NgChartsModule
  ]
})
export class PagesModule { }
