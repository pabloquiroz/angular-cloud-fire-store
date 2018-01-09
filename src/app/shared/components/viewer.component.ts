import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-component-viewer',
  template: `
    <div class="viewer">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .viewer{
      padding: 30px 20px;
      margin-bottom: 40px;
      max-width: 920px;
      width: 100%;
    }
  `]
})
export class ViewerComponent {
}
