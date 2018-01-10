import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  template: `
    <div class="container-title">
      <h1 fxFlex="100%"
      [style.xs]="{'font-size.px': 35}"
      [style.sm]="{'font-size.px': 45}"
      >{{ (settingProperty | async)?.messageInitial }}</h1>
    </div>
  `,
  styles: [`
    .container-title{
      padding: 0 15px;
      text-align: center;
    }

    h1 {
      font-size: 56px;
      font-weight: 300;
      line-height: 65px;
      margin: 15px 0 15px 0;
      padding: 10px;
      text-shadow: 1px 1px 1px #01579B;
    }
    h2 {
      font-weight: 300;
      line-height: 28px;
      margin: 15px 0 25px 0;
      padding: 10px;
      text-shadow: 1px 1px 1px #01579B;
    }
  `]
})
export class HeadlineComponent {
  @Input() settingProperty;
}
