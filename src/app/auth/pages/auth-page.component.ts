import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Authenticate } from '../models/user';

@Component({
  selector: 'app-auth-page',
  template: `
    <div id="content" fxLayoutAlign="center center">
      <app-login-form class="login-form"
        [email]="email"
        [password]="password"
        [error]="errorAutenticate"
        (login)="onLogin($event)"
      ></app-login-form>
    </div>
  `,
  styles: [`
    .login-form{
      text-align: center;
    }
    #content {
      padding: 0 20px;
      min-height: calc(100vh - 40px);
    }
  `]
})
export class AuthPageComponent {
  email: string;
  password: string;
  errorAutenticate: string;

  constructor(public firebaseAuth: AuthService) {}

  onLogin($event: Authenticate) {
    this.firebaseAuth.login($event);
    this.errorAutenticate = this.firebaseAuth.error;
  }

}
