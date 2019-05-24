import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { HrmBaseListComponent } from 'ClientApp/app/components/base.component';
import { AppUtil } from 'ClientApp/app/services/app.util';
import { EmployeeListService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends HrmBaseListComponent implements OnInit {

    //private test: Observable<GridDataResult>;

    constructor(appUtil: AppUtil, service: EmployeeListService) {
        super(appUtil, service);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    onEmployeeListDataChanges(state: DataStateChangeEvent): void {
        this.service.dataStateChange(state);
    }

}
