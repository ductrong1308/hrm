import { Component, OnInit } from '@angular/core';
import { MyDashboardListService } from './my-dashboard.service';
import { BaseFormComponent } from 'ClientApp/app/base.component';
import { AppUtil } from 'ClientApp/app/app.util';
import { EmployeeFormService } from '../employee/employee.service';

@Component({
    selector: 'app-my-dashboard',
    templateUrl: './my-dashboard.component.html',
    styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent extends BaseFormComponent implements OnInit {

    constructor(appUtil: AppUtil, service: EmployeeFormService) {
        super(appUtil, service);
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
