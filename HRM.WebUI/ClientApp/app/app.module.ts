import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/index';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { LayoutCoreModule } from './pages/layout/layout-core.module';

import { HrmHttpService } from './http.service';
import { AppUtil } from './app.util';
import { HrmBaseService, CommunicationService } from './app.service';


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
        { label: 'Employees', route: 'employee/list', iconClasses: 'fa fa-exclamation-triangle', isActive: true }
    ]
}; // font awesome

@NgModule({
    imports: [
        LayoutModule.forRoot(LEFT_MENU_ROUTES),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LayoutCoreModule,
        LoadingPageModule,
        MaterialBarModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [AppUtil, HrmHttpService, CookieService, CommunicationService, HrmBaseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
