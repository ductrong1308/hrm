import { Injectable } from '@angular/core';
import { HrmListService } from '../../app.service';
import { HrmHttpService } from '../../http.service';

@Injectable()
export class MyDashboardListService extends HrmListService {
    constructor(http: HrmHttpService) {
        super(http, 'employee/list');
    }
}
