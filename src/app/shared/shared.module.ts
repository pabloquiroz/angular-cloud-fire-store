import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ViewerComponent } from './components/viewer.component';
import { HeaderBackgroundComponent } from './components/header-background.component';
import { HeadlineComponent } from './components/head-line.component';

import { SettingService } from './services/setting.service';

export const COMPONENTS = [
  ViewerComponent,
  HeaderBackgroundComponent,
  HeadlineComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ COMPONENTS ],
  exports: [ COMPONENTS ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ SettingService ]
    };
  }
}
