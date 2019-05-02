import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LowerCaseUrlSerializer } from './helpers/url-serializer';

const routes: Routes = [
    {
        path: '', data: { title: 'Home' },
        children: [
            { path: '', component: HomeComponent },
            { path: 'alert', loadChildren: './pages/alert/alert.module#AlertModule', data: { title: 'Alert' } },
            {
                path: 'layout', data: { title: 'Layout' },
                children: [
                    { path: 'configuration', loadChildren: './pages/layout/configuration/configuration.module#ConfigurationModule', data: { title: 'Configuration' } },
                    { path: 'custom', loadChildren: './pages/layout/custom/custom.module#CustomModule', data: { title: 'Disable Layout' } },
                ]
            },
            {
                path: 'boxs', data: { title: 'Boxs' },
                children: [
                    { path: 'box', loadChildren: './pages/layout/configuration/configuration.module#ConfigurationModule', data: { title: 'Configuration' } },
                ]
            },
            {
                path: 'login', loadChildren: './pages/login/login.module#LoginModule', data: { customLayout: true }
            },
            {
                path: 'register', loadChildren: './pages/register/register.module#RegisterModule',
                data: { customLayout: true }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ],
})
export class AppRoutingModule { }


