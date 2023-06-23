import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LeadsComponent } from './component/leads/leads.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AdmincontactComponent } from './component/admincontact/admincontact.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { InforComponent } from './component/infor/infor.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'admincontact', component: AdmincontactComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'invoices', component: InvoiceComponent },
  { path: 'infor', component: InforComponent },
  { path: 'settings', component: SettingsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
