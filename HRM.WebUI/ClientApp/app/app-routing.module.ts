import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { LowerCaseUrlSerializer } from './helpers/url-serializer';

const routes: Routes = [
    {
        path: '', data: { title: 'Home' },
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './pages/my-dashboard/my-dashboard.module#MyDashboardModule' },
            { path: 'alert', loadChildren: './pages/alert/alert.module#AlertModule', data: { title: 'Alert' } },
            //{
            //    path: 'layout', data: { title: 'Layout' },
            //    children: [
            //        { path: 'configuration', loadChildren: './pages/layout/configuration/configuration.module#ConfigurationModule', data: { title: 'Configuration' } },
            //        { path: 'custom', loadChildren: './pages/layout/custom/custom.module#CustomModule', data: { title: 'Disable Layout' } },
            //    ]
            //}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ],
})
export class AppRoutingModule { }


