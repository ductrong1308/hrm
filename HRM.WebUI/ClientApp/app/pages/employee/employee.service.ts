import { Injectable } from '@angular/core';
import { HrmListService, HrmFormService } from '../../app.service';
import { HrmBaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService extends HrmListService {

    constructor(http: HrmBaseService) {
        super(http, 'employee/list');
    }
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeFormService extends HrmFormService {
    constructor(http: HrmBaseService) {
        super(http);
    }
}
