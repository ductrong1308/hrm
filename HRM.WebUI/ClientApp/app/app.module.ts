import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './pages/core/core.module';

import { LayoutModule } from './components/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        LayoutModule.forRoot(adminLteConf),
        LoadingPageModule, MaterialBarModule
    ],
    declarations: [
        AppComponent,
        HomeComponent

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
