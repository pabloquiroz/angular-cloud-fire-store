import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './pages/app.component';
import { FooterComponent } from './components/footer.component';
import { LayoutComponent } from './components/layout.component';
import { NavListComponent } from './components/nav-list.component';

import { NavService } from './services/nav.service';


export const COMPONENTS = [
  AppComponent,
  FooterComponent,
  LayoutComponent,
  NavListComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [ COMPONENTS ],
  providers: [ NavService ]
})
export class CoreModule { }
