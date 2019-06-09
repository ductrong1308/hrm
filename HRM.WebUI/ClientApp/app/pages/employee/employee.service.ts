import { Injectable, OnInit } from '@angular/core';
import { HrmListService, HrmFormService, CommunicationService } from '../../app.service';
import { HrmHttpService } from '../../http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService extends HrmListService {

    constructor(communicationService: CommunicationService, http: HrmHttpService) {
        super(communicationService, http, 'employee/list');
    }
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeFormService extends HrmFormService {
    constructor(communicationService: CommunicationService, http: HrmHttpService) {
        super(communicationService, http);
    }
}
