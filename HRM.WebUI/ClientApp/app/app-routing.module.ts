import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LowerCaseUrlSerializer } from './helpers/url-serializer';

const routes: Routes = [
    {
        path: '', data: { title: 'Home' },
        children: [
            { path: '', component: HomeComponent },
            { path: 'accordion', loadChildren: './+accordion/accordion.module#AccordionModule', data: { title: 'Accordion' } },
            { path: 'alert', loadChildren: './+alert/alert.module#AlertModule', data: { title: 'Alert' } },
            {
                path: 'layout', data: { title: 'Layout' },
                children: [
                    { path: 'configuration', loadChildren: './+layout/configuration/configuration.module#ConfigurationModule', data: { title: 'Configuration' } },
                    { path: 'custom', loadChildren: './+layout/custom/custom.module#CustomModule', data: { title: 'Disable Layout' } },
                    { path: 'content', loadChildren: './+layout/content/content.module#ContentModule', data: { title: 'Content' } },
                    { path: 'header', loadChildren: './+layout/header/header.module#HeaderModule', data: { title: 'Header' } },
                    { path: 'sidebar-left', loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule', data: { title: 'Sidebar Left' } },
                    { path: 'sidebar-right', loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule', data: { title: 'Sidebar Right' } },
                ]
            },
            {
                path: 'boxs', data: { title: 'Boxs' },
                children: [
                    { path: 'box', loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule', data: { title: 'Box' } },
                    { path: 'info-box', loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule', data: { title: 'Info Box' } },
                    { path: 'small-box', loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule', data: { title: 'Small Box' } }
                ]
            },
            { path: 'dropdown', loadChildren: './+dropdown/dropdown.module#DropdownModule', data: { title: 'Dropdown' } },
            { path: 'tabs', loadChildren: './+tabs/tabs.module#TabsModule', data: { title: 'Tabs' } },

            {
                path: 'form', data: { title: 'Form' },
                children: [
                    { path: 'input-text', loadChildren: './+form/input-text/input-text.module#InputTextModule', data: { title: 'Input Text' } }
                ]
            },
            {
                path: 'login', loadChildren: './+login/login.module#LoginModule', data: { customLayout: true }
            },
            {
                path: 'register', loadChildren: './+register/register.module#RegisterModule',
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


