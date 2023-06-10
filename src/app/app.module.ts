import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulosAngularMaterials } from './material.module';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { AdmincontactComponent } from './component/admincontact/admincontact.component';
import { LeadsComponent } from './component/leads/leads.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { InforComponent } from './component/infor/infor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    SettingsComponent,
    ProjectsComponent,
    AdmincontactComponent,
    LeadsComponent,
    InvoiceComponent,
    InforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulosAngularMaterials,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
