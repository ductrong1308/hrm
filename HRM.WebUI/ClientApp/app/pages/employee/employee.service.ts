import { Injectable } from '@angular/core';
import { HrmListService } from 'ClientApp/app/services/app.service';
import { HrmBaseService } from 'ClientApp/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService extends HrmListService{

    constructor(http: HrmBaseService) {
        super(http, 'employee/list');
    }
}
