import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { BaseListComponent } from '../../../base.component';
import { AppUtil } from '../../../app.util';
import { EmployeeListService } from '../employee.service';
import { Observable } from 'rxjs';
import { SortDescriptor } from '@progress/kendo-data-query';
import { CommunicationService } from 'ClientApp/app/app.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends BaseListComponent implements OnInit {

    //private test: Observable<GridDataResult>;

    constructor(appUtil: AppUtil, service: EmployeeListService) {
        super(appUtil, service);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    public sort: SortDescriptor[] = [{
        field: 'firstName',
        dir: 'desc'
    }];

    onEmployeeListDataChanges(state: DataStateChangeEvent): void {
        this.service.dataStateChange(state);
    }

}
