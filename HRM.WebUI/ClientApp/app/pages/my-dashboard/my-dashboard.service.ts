import { Injectable, OnInit } from '@angular/core';
import { HrmListService, CommunicationService } from '../../app.service';
import { HrmHttpService } from '../../http.service';

@Injectable()
export class MyDashboardListService extends HrmListService {
    constructor(communicationService: CommunicationService, http: HrmHttpService) {
        super(communicationService, http, 'employee/list');
    }
}
