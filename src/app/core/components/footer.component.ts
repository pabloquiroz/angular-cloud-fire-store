import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <div class="footer-title">
        Site ©2017 | MIT.
      </div>
    </footer>
  `,
  styles: [`
    .app-footer{
      padding: 30px 0;
    }
    .footer-title{
      font-size: 13px;
      text-align: center;
    }
  `]
})
export class FooterComponent {}
