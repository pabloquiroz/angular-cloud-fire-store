import { Observable } from 'rxjs/Observable';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NavService } from '../services/nav.service';
import { AuthService } from '../../auth/services';

import { NavigationId } from '../models/navigation';
import { Setting } from '../../shared/models';
import { SettingService } from '../../shared/services/setting.service';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <mat-toolbar color="primary">
        <a mat-button (click)="snav.toggle()">
          <mat-icon>menu</mat-icon>
        </a>
        <span>{{ (settings | async)?.nameOfSite }}</span>
        <span class="fill-remaining-space"></span>
        <span>
          <div fxFlex="100%"
            fxHide.lt-md="true"
            *ngFor="let nav of navBar | async;">
            <a mat-button routerLink="{{ nav.url }}" routerLinkActive="active">{{ nav.name }}</a>
          </div>
        </span>
        <div *ngIf="auth | async; let user; else showLogin">
          <span matTooltip="Select a Menu!">
            <button mat-button [matMenuTriggerFor]="menuUser">
              <mat-icon class="material-icons md-24">account_circle</mat-icon>
            </button>
            <mat-menu #menuUser="matMenu" [overlapTrigger]="false">
              <button mat-menu-item>{{ user.email }}</button>
              <mat-divider></mat-divider>
              <button mat-menu-item (click)="onLogout()" routerLink="/home" routerLinkActive="active">
                <mat-icon class="material-icons md-24">lock_open</mat-icon>
                <span>Logout</span>
              </button>
            </mat-menu>
          </span>
        </div>
        <ng-template #showLogin>
          <a mat-button routerLink="/auth" routerLinkActive="active">
            <mat-icon class="material-icons md-24">perm_identity</mat-icon>
          </a>
        </ng-template>
      </mat-toolbar>
      <mat-sidenav-container>
        <mat-sidenav #snav>
          <app-nav-list [authState]="auth" [navListProperty]="navList" [navBarProperty]="navBar"></app-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
            <router-outlet></router-outlet>
          <app-footer></app-footer>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </app-layout>
  `,
  styles: [`
    mat-sidenav {
      width: 200px;
    }
    .fill-remaining-space{
      flex: 1 1 auto
    }
  `]
})
export class AppComponent implements OnInit {
  navBar: Observable<NavigationId[]>;
  navList: Observable<NavigationId[]>;
  auth: Observable<firebase.User>;
  settings: Observable<Setting>;
  user: Observable<firebase.User>;
  @ViewChild('snav') public sidenav: MatSidenav;

  constructor(
    public firebaseAuth: AuthService,
    private db: NavService
  ) {}

  ngOnInit() {
    this.getNavs();
    this.getSettings();
    this.authState();
  }

  onLogout() {
    this.firebaseAuth.logout();
  }

  authState() {
    this.auth =  this.firebaseAuth.authState();
  }

  toogleSidenav () {
    this.sidenav
        .toggle()
        .then(() => {});
  }

  getNavs() {
    this.navBar = this.db.navBar;
    this.navList = this.db.navList;
  }

  getSettings() {
    this.settings = this.db.settings;
  }
}
