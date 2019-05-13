import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { LayoutCoreModule } from './pages/layout/layout-core.module';

import { LayoutModule } from './components/index';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

import { HttpModule } from '@angular/http';

import { HRMBaseService } from './services/base.service';
import { AppUtil } from './services/app.util';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutCoreModule,
        LayoutModule.forRoot(adminLteConf),
        LoadingPageModule,
        MaterialBarModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [HRMBaseService, AppUtil],
    bootstrap: [AppComponent]
})
export class AppModule { }
