import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyDashboardListService } from './my-dashboard.service';
import { MyDashboardComponent } from './my-dashboard.component'; 

//import { HRMBaseService } from '../../services/base.service';
//import { Http } from '@angular/http';
//import { HttpModule } from '@angular/http';


const MYDASHBOARD_ROUTE = [
    { path: '', component: MyDashboardComponent }
];

@NgModule({
    declarations: [MyDashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(MYDASHBOARD_ROUTE)
    ],
    providers: [MyDashboardListService]
})
export class MyDashboardModule { }
