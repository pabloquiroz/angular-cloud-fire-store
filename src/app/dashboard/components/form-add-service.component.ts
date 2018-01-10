import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Component, Input, Output, OnChanges, TemplateRef, ViewChild, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingId, Setting } from '../../shared/models';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-service',
  template: `
    <mat-card>
      <mat-toolbar class="toolbar">
        <ng-template [ngIf]="services.selectedOptions.selected.length === 0">
          <span><mat-card-title>Service List</mat-card-title></span>
        </ng-template>
        <ng-template [ngIf]="services.selectedOptions.selected.length !== 0">
          <span><mat-card-title>Option selected: {{ services.selectedOptions.selected.length }}</mat-card-title></span>
          <span class="fill-remaining-space"></span>
          <span><mat-icon matListIcon (click)="deleteMultipleService(services, allServices)">delete</mat-icon></span>
        </ng-template>
      </mat-toolbar>
      <mat-card-content>
        <mat-selection-list #services>
          <mat-list-option *ngFor="let service of serviceProperty | async"
            [selected]="service.selected" [value]="service" (click)="getSelectedValue(services)">
            <h3 matLine>{{ service.name }}</h3>
          </mat-list-option>
        </mat-selection-list>
        <mat-selection-list #allServices>
          <mat-list-option (click)="selectDeselect(services); stateSelect = !stateSelect"
          >Select/Deselect All
          </mat-list-option>
        </mat-selection-list>
        <ng-template #dialogAddService>
          <form [formGroup]="serviceForm">
            <p>Add Service</p>
              <mat-form-field class="field-full-width">
                <input matInput formControlName="name" placeholder="Name of service" required>
                <mat-error *ngIf="serviceForm.hasError('required', 'name')"><strong>This field is required</strong></mat-error>
              </mat-form-field>
              <mat-form-field class="field-full-width">
                <mat-select placeholder="Select Service" [(ngModel)]="selectedValue" formControlName="icon" required>
                  <mat-option>None</mat-option>
                  <mat-option *ngFor="let icon of iconProperty | async" [value]="icon.name">{{ icon.name }}</mat-option>
                </mat-select>
                <mat-error *ngIf="serviceForm.hasError('required', 'icon')"><strong>This field is required</strong></mat-error>
              </mat-form-field>
              <p><mat-icon matListIcon class="material-icons md-48">{{ selectedValue }}</mat-icon></p>
              <button [disabled]="serviceForm.pristine" mat-raised-button (click)="addServices()">Add Service</button>
          </form>
        </ng-template>
      </mat-card-content>
      <mat-card-actions>
        <button mat-mini-fab>
          <mat-icon mat-raised-button (click)="openDialog()">add</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .toolbar{
      background-color: #fff;
    }
    .field-full-width{
      width: 100%;
    }
    .fill-remaining-space{
      flex: 1 1 auto
    }
  `]
})
export class FormAddServiceComponent implements OnChanges {
  @Input() serviceProperty: Observable<SettingId>;
  @Input() iconProperty: Observable<SettingId[]>;
  @Output() addService: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteService: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('dialogAddService') template: TemplateRef<any>;
  serviceForm: FormGroup;
  stateSelect = false;

  selectedOptions: Observable<SettingId[]>;

  constructor( public dialog: MatDialog, private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnChanges() {
    this.serviceForm.reset({
      name: '',
      icon: ''
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(this.template, {
      width: '890px'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.serviceForm.reset({
        name: '',
        icon: ''
      });
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
    this.ngOnChanges();
  }


  createForm() {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required]
    });
  }

  addServices() {
    if (this.serviceForm.status !== 'VALID') {
      console.log('form is not valid');
      return;
    }
    const data = this.serviceForm.value;
    this.addService.emit(data);
    this.closeDialog();
  }

  deleteMultipleService(services, allServices) {
    const data = this.selectedOptions.map(result => result);
    console.log('Data select: ', data);

    for (let i in data) {
      if (i) {
        this.deleteService.emit(data[i]);
      }
    }

    if (this.stateSelect === true ) {
      services.deselectAll();
      allServices.deselectAll();
      this.stateSelect = false;
    }
    this.selectedOptions = Observable.of([]);
  }

  getSelectedValue(services) {
    this.selectedOptions = services.selectedOptions.selected.map(result => result.value);
  }

  selectDeselect(services) {
    if (this.stateSelect === false) {
      services.selectAll();
      this.selectedOptions = services.selectedOptions.selected.map(result => result.value);
    } else {
      services.deselectAll();
      this.selectedOptions = Observable.of();
    }
  }
}
