import { Injectable } from '@angular/core';
import { HrmListService } from '../../app.service';
import { HrmBaseService } from '../../base.service';

@Injectable()
export class MyDashboardListService extends HrmListService {
    constructor(http: HrmBaseService) {
        super(http, 'employee/list');
    }
}
