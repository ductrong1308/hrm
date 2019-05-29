import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer, Router } from '@angular/router';

import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { LowerCaseUrlSerializer } from './helpers/url-serializer';

const routes: Routes = [
    {
        path: '', data: { title: 'Home' },
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './pages/my-dashboard/my-dashboard.module#MyDashboardModule', data: { title: 'Dashboard' } },
            { path: 'employee/list', loadChildren: './pages/employee/employee-list/employee-list.module#EmployeeListModule', data: { title: 'Employees' } },
            //{
            //    path: 'layout', data: { title: 'Layout' },
            //    children: [
            //        { path: 'configuration', loadChildren: './pages/layout/configuration/configuration.module#ConfigurationModule', data: { title: 'Configuration' } },
            //        { path: 'custom', loadChildren: './pages/layout/custom/custom.module#CustomModule', data: { title: 'Disable Layout' } },
            //    ]
            //}
            //{ path: '404', redirectTo: 'app/error?errorCode=404' }
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
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.errorHandler = (error: any) => {
            var message: string = error.message;
            if (message.toLowerCase().indexOf('cannot match any routes') >= 0) {
                window.location.href = 'app/error?errorCode=404';
            }
        }
    }
}


