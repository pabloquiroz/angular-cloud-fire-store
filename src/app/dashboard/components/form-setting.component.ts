import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { Component, EventEmitter, OnChanges,  OnDestroy, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Setting } from '../../shared/models';

@Component({
  exportAs: 'form-setting',
  selector: 'app-form-setting',
  template: `
    <mat-card>
      <mat-card-title>Edit settings Site</mat-card-title>
      <mat-card-content>
        <form [formGroup]="settingForm" (ngSubmit)="updateSetting()" novalidate>
          <div class="form-container">
            <mat-form-field>
              <input matInput
                formControlName="nameOfSite"
                placeholder="Name of Site"
                required
              >
              <mat-icon matSuffix>create</mat-icon>
              <mat-error><strong>This field is required</strong></mat-error>
            </mat-form-field>
            <mat-form-field>
              <input matInput #input maxlength="20"
                formControlName="messageInitial"
                placeholder="Home Message"
                required
              >
              <mat-icon matSuffix>create</mat-icon>
              <mat-hint>{{ input.value?.length || 0 }}/20</mat-hint>
              <mat-error><strong>This field is required</strong></mat-error>
            </mat-form-field>
          </div>
        </form>
      </mat-card-content>
      <mat-card-actions>
        <button [disabled]="settingForm.pristine" mat-raised-button (click)="updateSetting()">Update</button>
        <button [disabled]="settingForm.pristine" mat-raised-button (click)="cancelUpdateSetting()">Reset</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .form-container > *{
      width: 100%;
    }
  `]
})
export class FormSettingComponent implements  OnDestroy,  OnChanges {
  @Input() settingProperty: Observable<Setting>;
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  private subscription: ISubscription;
  settingForm: FormGroup;
  stateProperty = false;
  nameOfSite: string;
  messageInitial: string;

  constructor (private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.settingForm = this.fb.group({
      nameOfSite: ['', Validators.required],
      messageInitial: ['', Validators.required]
    });
  }

  ngOnChanges() {
    this.subscription = this.settingProperty.subscribe(response => {
      this.nameOfSite = response.nameOfSite;
      this.messageInitial = response.messageInitial;
      this.settingForm.patchValue({
        nameOfSite: this.nameOfSite,
        messageInitial: this.messageInitial
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Unsubscribe', this.subscription);
  }

  updateSetting() {
    if (this.settingForm.status !== 'VALID') {
      console.log('form is not valid');
      return;
    }
    const data = this.settingForm.value;
    this.update.emit(data);
  }

  cancelUpdateSetting() {
    this.settingForm.reset({
      nameOfSite: this.nameOfSite,
      messageInitial: this.messageInitial
    });
  }
}
