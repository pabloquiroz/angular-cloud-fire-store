import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroupDirective } from '@angular/forms';

import { Authenticate } from '../models/user';

@Component({
  selector: 'app-login-form',
  template: `
      <h1>Welcome to App</h1>
      <form (ngSubmit)="signIn()">
        <div class="form-container">
          <mat-form-field>
            <input matInput
              [(ngModel)]="email"
              name="email"
              placeholder="email"
              [formControl]="emailFormControl"
              required
            >
            <mat-error *ngIf="emailFormControl.invalid">
              <strong>{{ getErrorMessage() }}</strong>
            </mat-error>
          </mat-form-field>
          <mat-form-field>
            <input matInput
              name="password"
              type="password"
              [(ngModel)]="password"
              placeholder="password"
              required>
            <mat-error>
              <strong>This field is required</strong>
            </mat-error>
          </mat-form-field>
          <button type="submit" mat-raised-button [disabled]="!email || !password">
            Login
          </button>
          <mat-error><strong>{{error}}</strong></mat-error>
        </div>
      </form>
  `,
  styles: [`
    .form-container > *{
      width: 100%;
    }
  `]
})
export class LoginFormComponent {
  @Input() email: string;
  @Input() password: string;
  @Input() error: string;
  @Output() login = new EventEmitter<Authenticate>();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('email') ? 'Not a valid email' :
      '';
  }

  signIn() {
    this.login.emit({email: this.email, password: this.password});
  }


}
