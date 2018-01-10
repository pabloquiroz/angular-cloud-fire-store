import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthPageComponent } from './pages/auth-page.component';
import { LoginFormComponent } from './components/login-form.component';

import { AuthService, AuthServiceGuard } from './services';


export const COMPONENTS = [
  AuthPageComponent, LoginFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  declarations: [ COMPONENTS ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [ AuthService, AuthServiceGuard ]
    };
  }
}
