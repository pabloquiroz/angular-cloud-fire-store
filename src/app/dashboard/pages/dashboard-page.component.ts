import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SettingService } from '../../shared/services';
import { SettingId, Setting } from '../../shared/models';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div id="content">
      <app-component-viewer fxLayoutAlign="center">
        <div fxLayout="row wrap" fxLayout.xs="column">
          <app-form-setting class="form"
            fxFlex="100%"
            [settingProperty]="settingsDashboard"
            (update)="onSubmitSetting($event)"
          >
          </app-form-setting>
          <app-form-service-description class="form"
            fxFlex="100%"
            [settingProperty]="settingsDashboard"
            (update)="onSubmitServiceDescription($event)"
          >
          </app-form-service-description>
          <app-form-add-service class="form"
            fxFlex="100%"
            [iconProperty]="iconList"
            [serviceProperty]="services"
            (addService)="onAddService($event)"
            (deleteService)="onDeleteService($event)"
          >
          </app-form-add-service>
        </div>
      </app-component-viewer>
    </div>
  `,
  styles: [`
    .form{
      padding: 15px;
    }
    #content {
      padding: 0 20px;
      min-height: calc(100vh - 40px);
    }
  `]
})
export class DashboardPageComponent implements OnInit {
  settingsDashboard: Observable<Setting>;
  services: Observable<SettingId[]>;
  iconList: Observable<SettingId[]>;

  constructor( private db: SettingService ) {}

  ngOnInit() {
    this.getAdminServices();
  }

  getAdminServices() {
    this.settingsDashboard = this.db.settings;
    this.services = this.db.services;
    this.iconList = this.db.iconsSetting;
  }

  onSubmitSetting($event: Setting) {
    this.db.updateSetting($event);
  }

  onSubmitServiceDescription($event: Setting) {
    this.db.updateServiceDescription($event);
  }

  onAddService($event: Setting) {
    this.db.addService($event);
  }

  onDeleteService($event: SettingId) {
    this.db.deleteService($event);
  }





}
