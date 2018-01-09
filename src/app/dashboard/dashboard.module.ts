import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardPageComponent } from './pages/dashboard-page.component';
import { FormSettingComponent } from './components/form-setting.component';
import { FormServiceDescriptionComponent } from './components/form-service-description.component';
import { FormAddServiceComponent } from './components/form-add-service.component';


export const COMPONENTS = [
  DashboardPageComponent,
  FormSettingComponent,
  FormServiceDescriptionComponent,
  FormAddServiceComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ COMPONENTS ]
})
export class DashboardModule { }
