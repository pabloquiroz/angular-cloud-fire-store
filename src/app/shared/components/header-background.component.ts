import { Component } from '@angular/core';

@Component({
  selector: 'app-header-background',
  template: `
    <div fxLayout="column" fxLayoutAlign="center stretch" class="header-background content-header-background">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .content-header-background{
      height: 410px;
      padding: 50px;
      margin-bottom: 0px;
    }

    .header-background{
      background-position: center 0;
      background-size: 50% auto;
      background-repeat: no-repeat;
      background-color: #1A237E;
    }
  `]
})
export class HeaderBackgroundComponent {}
