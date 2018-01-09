import { Component, Input } from '@angular/core';
import { Navigation } from '../models/navigation';

@Component({
  selector: 'app-nav-list',
  template: `
    <mat-nav-list fxHide.gt-sm="true" *ngFor="let nav of navBarProperty | async">
      <mat-list-item><a routerLink="{{ nav.url }}" routerLinkActive="active">{{ nav.name }}</a></mat-list-item>
    </mat-nav-list>
    <mat-divider></mat-divider>
    <div *ngIf="authState | async;">
      <mat-nav-list *ngFor="let nav of navListProperty | async">
        <mat-list-item><a routerLink="{{ nav.url }}" routerLinkActive="active">{{ nav.name }}</a></mat-list-item>
      </mat-nav-list>
    </div>
  `,
  styles: [`
    a:focus{
      outline: 0
    }
  `],
})

export class NavListComponent {
  @Input() navListProperty:  Navigation[];
  @Input() navBarProperty: Navigation[];
  @Input() authState;
}
