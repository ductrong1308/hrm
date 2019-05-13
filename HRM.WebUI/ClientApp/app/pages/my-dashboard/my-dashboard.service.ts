import { Injectable } from '@angular/core';
import { ListService } from '../../services/app.service';
import { HRMBaseService } from '../../services/base.service';

@Injectable()
export class MyDashboardListService extends ListService {
    constructor(http: HRMBaseService) {
        super(http, "employee/list");
        debugger;
    }
}
