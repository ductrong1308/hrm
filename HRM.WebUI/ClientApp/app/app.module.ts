import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutCoreModule } from './pages/layout/layout-core.module';

import { LayoutModule } from './components/index';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

import { HttpModule } from '@angular/http';

import { HrmBaseService } from './services/base.service';
import { AppUtil } from './services/app.util';
import { CookieService } from 'ngx-cookie-service';


const LEFT_MENU_ROUTES = {
    skin: 'blue',
    // isSidebarLeftCollapsed: false,
    // isSidebarLeftExpandOnOver: false,
    // isSidebarLeftMouseOver: false,
    // isSidebarLeftMini: true,
    // sidebarRightSkin: 'dark',
    // isSidebarRightCollapsed: true,
    // isSidebarRightOverContent: true,
    // layout: 'normal',
    sidebarLeftMenu: [
        { label: 'PERSONAL', separator: true },
        { label: 'My Dashboard', route: '/', iconClasses: 'fa fa-road' },
        {
            label: 'My Requests', iconClasses: 'fa fa-th-list', children: [
                { label: 'Late-in / Early-out', route: 'requests/in-out' },
                { label: 'Leave', route: 'requests/leave' }
            ]
        },
        { label: 'COMPANY', separator: true },
        { label: 'Employees', route: 'employee/list', iconClasses: 'fa fa-exclamation-triangle' }
    ]
}; // font awesome

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutCoreModule,
        LayoutModule.forRoot(LEFT_MENU_ROUTES),
        LoadingPageModule,
        MaterialBarModule,
        HttpModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [AppUtil, HrmBaseService, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
