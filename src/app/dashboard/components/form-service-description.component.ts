import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { Component, Output, EventEmitter, OnChanges, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Setting } from '../../shared/models';

@Component({
  selector: 'app-form-service-description',
  template: `
    <mat-card>
      <mat-card-title>Service Description</mat-card-title>
      <mat-card-content>
        <form [formGroup]="serviceForm" (ngSubmit)="updateSetting()" novalidate>
          <div class="form-container">
            <mat-form-field>
              <input matInput
                formControlName="serviceTitle"
                placeholder="Service Title"
                required
              >
              <mat-icon matSuffix>create</mat-icon>
              <mat-error><strong>This field is required</strong></mat-error>
            </mat-form-field>
            <mat-form-field>
              <textarea matInput #inputArea maxlength="200" rows="5"
                formControlName="serviceSummary"
                placeholder="Service Summary"
                required
              ></textarea>
              <mat-icon matSuffix>create</mat-icon>
              <mat-hint>{{inputArea.value?.length || 0}}/200</mat-hint>
              <mat-error><strong>This field is required</strong></mat-error>
            </mat-form-field>
          </div>
        </form>
      </mat-card-content>
      <mat-card-actions>
        <button [disabled]="serviceForm.pristine" mat-raised-button (click)="updateSetting()">Update</button>
        <button [disabled]="serviceForm.pristine" mat-raised-button (click)="cancelUpdateSetting()">Reset</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .form-container > *{
      width: 100%;
    }
  `]
})
export class FormServiceDescriptionComponent implements OnChanges, OnDestroy {
  @Input() settingProperty: Observable<Setting>;
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  private subscription: ISubscription;
  serviceForm: FormGroup;
  serviceTitle: string;
  serviceSummary: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.serviceForm = this.fb.group({
      serviceTitle: [ '', Validators.required ],
      serviceSummary: [ '', Validators.required ]
    });
  }

  ngOnChanges() {
    this.subscription = this.settingProperty.subscribe(response => {
      this.serviceTitle = response.serviceTitle;
      this.serviceSummary = response.serviceSummary;
      this.serviceForm.patchValue({
        serviceTitle: this.serviceTitle,
        serviceSummary: this.serviceSummary
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Unsubscribe', this.subscription);
  }

  updateSetting() {
    if (this.serviceForm.status !== 'VALID') {
      console.log('form is not valid');
      return;
    }
    const data = this.serviceForm.value;
    this.update.emit(data);
  }

  cancelUpdateSetting() {
    this.serviceForm.reset({
      serviceTitle: this.serviceTitle,
      serviceSummary: this.serviceSummary
    });
  }
}
