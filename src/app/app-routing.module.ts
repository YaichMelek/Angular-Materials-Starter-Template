import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogComponent } from './pages/log/log.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
    { path: 'dash', component: DashboardComponent },
    { path: 'cust', component: CustomersComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'about', component: AboutComponent },
    ] 
  },
  { path: 'log', component: LogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
