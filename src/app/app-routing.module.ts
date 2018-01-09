import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './auth/pages/auth-page.component';
import { HomePageComponent } from './home/pages/home-page.component';

import { AuthServiceGuard } from './auth/services';

export const APP_ROUTES: Routes  = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [ AuthServiceGuard ]
    },
    {
        path: 'auth',
        component: AuthPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTES,
            {
                enableTracing: false
            }
        )
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }

