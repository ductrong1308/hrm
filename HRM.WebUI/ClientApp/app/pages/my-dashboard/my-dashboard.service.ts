import { Injectable } from '@angular/core';
import { HrmListService } from '../../services/app.service';
import { HrmBaseService } from '../../services/base.service';

@Injectable()
export class MyDashboardListService extends HrmListService {
    constructor(http: HrmBaseService) {
        super(http, 'employee/list');
    }
}
