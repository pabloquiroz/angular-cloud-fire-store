import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomePageComponent } from './pages/home-page.component';
import { SectionServiceComponent } from './components/section-service.component';

export const COMPONENTS = [
  HomePageComponent, SectionServiceComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [ COMPONENTS ]
})
export class HomeModule { }
