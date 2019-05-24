import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeListService } from '../employee.service';

const EMPLOYEE_LIST_ROUTE = [
    {
        path: '', component: EmployeeListComponent
    }
];

@NgModule({
    declarations: [
        EmployeeListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(EMPLOYEE_LIST_ROUTE),
        GridModule
    ],
    providers: [EmployeeListService]
})
export class EmployeeListModule { }
