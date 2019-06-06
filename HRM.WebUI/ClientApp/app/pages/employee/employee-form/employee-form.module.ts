import { NgModule } from '@angular/core';

import { EmployeeFormComponent } from './employee-form.component';
import { RouterModule } from '@angular/router';
import { EmployeeFormService } from '../employee.service';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';
import { UploadModule } from '@progress/kendo-angular-upload';

const EMPLOYEE_FORM_ROUTE = [
    {
        //path: ':mode/:id', component: EmployeeFormComponent
        path: '', component: EmployeeFormComponent
    }
];

@NgModule({
    declarations: [EmployeeFormComponent],
    imports: [
        RouterModule.forChild(EMPLOYEE_FORM_ROUTE),
        InputsModule,
        DateInputsModule,
        DropDownsModule,
        FormsModule,
        UploadModule
    ],
    providers: [EmployeeFormService]
})
export class EmployeeFormModule { }
