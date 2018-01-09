import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Setting } from '../../shared/models';

@Component({
    selector: 'app-section-service',
    template: `
        <div fxLayout="row wrap" fxLayout.xs="column">
            <div class="product-box section-text" fxFlex="100%">
                <h1 class="title">{{ (settingProperty | async)?.serviceTitle }}</h1>
                <p class="summary">{{ (settingProperty | async)?.serviceSummary }}</p>
            </div>
            <div class="product-box" fxFlex="33.33%" *ngFor="let service of serviceProperty | async">
                <i class="material-icons md-48 box-product">{{ service.icon }}</i>
                <p>{{ service.name }}</p>
            </div>
        </div>
    `,
    styles: [`
        .product-box{
            padding: 0 15px;
            text-align: center;
        }
        .section-text{
            margin-bottom: 60px;
        }
        .title{
            text-align: center;
        }
        .summary{
            text-align: center;
        }
        h1{
            font-size: 1em;
        }
    `]
})

export class SectionServiceComponent {
    @Input() settingProperty: Observable<Setting>;
    @Input() serviceProperty: Observable<Setting[]>;
}
