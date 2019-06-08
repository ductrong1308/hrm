import { Injectable } from '@angular/core';
import { HrmListService, HrmFormService } from '../../app.service';
import { HrmHttpService } from '../../http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService extends HrmListService {

    constructor(http: HrmHttpService) {
        super(http, 'employee/list');
    }
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeFormService extends HrmFormService {
    constructor(http: HrmHttpService) {
        super(http);
    }
}
