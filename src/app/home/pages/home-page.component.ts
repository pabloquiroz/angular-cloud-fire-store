import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SettingService } from '../../shared/services';
import { Setting, SettingId } from '../../shared/models';

@Component({
  selector: 'app-home-page',
  template: `
    <div id="content">
      <app-header-background>
        <app-headline [settingProperty]="settingHome"></app-headline>
        <section class="header-started">
          <button class="btn-get-started" mat-button color="warn" routerLink=".">Get Started</button>
        </section>
      </app-header-background>
      <app-component-viewer fxLayoutAlign="center">
        <app-section-service [settingProperty]="settingHome" [serviceProperty]="services"></app-section-service>
      </app-component-viewer>
    </div>
  `,
  styles: [`
    .header-started{
      text-align: center;
      margin: 60px;
    }
    .btn-get-started{
      border: 1px solid #f44336;
    }
    #content {
      min-height: calc(100vh - 40px);
    }
  `]
})
export class HomePageComponent implements OnInit {
  settingHome:  Observable<Setting>;
  services: Observable<SettingId[]>;

  constructor( private db: SettingService ) {}

  ngOnInit() {
    this.getHomeServices();
  }

  getHomeServices() {
    this.settingHome = this.db.settings;
    this.services = this.db.services;
  }

}
