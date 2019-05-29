import { Injectable } from '@angular/core';
import { HrmListService } from '../../app.service';
import { HrmBaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService extends HrmListService{

    constructor(http: HrmBaseService) {
        super(http, 'employee/list');
    }
}
