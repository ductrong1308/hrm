import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseFormComponent } from 'ClientApp/app/base.component';
import { EmployeeFormService } from '../employee.service';
import { AppUtil } from '../../../app.util';
import { ActivatedRoute } from '@angular/router';
import { UploadEvent, RemoveEvent, FileInfo, SelectEvent, FileRestrictions, SuccessEvent } from '@progress/kendo-angular-upload';
import { NgForm, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
    selector: 'employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent extends BaseFormComponent implements OnInit {
    @ViewChild('jobTitleDropdownList') public jobTitleDropdownListElement: DropDownListComponent;
    @ViewChild('firstNameElement') public firstNameElement: ElementRef;

    public jobTitleListItems: Array<{ text: string, value: number }> = [
        { text: 'Employee', value: 1 },
        { text: 'Team leader', value: 2 },
        { text: 'Supervisor', value: 3 },
        { text: 'Project Manager', value: 4 },
        { text: 'Director', value: 5 },
    ];

    public roleListItems: any = [
        { text: 'Team leader', value: 1 },
        { text: 'Supervisor', value: 2 },
        { text: 'Project Manager', value: 3 },
    ];

    hrmRestrictedFileExtensions: FileRestrictions = {
        allowedExtensions: ['jpg', 'jpeg', 'png']
    };

    public userImages: Array<FileInfo>;

    constructor(appUtil: AppUtil, route: ActivatedRoute, service: EmployeeFormService) {
        super(appUtil, service);
    }

    ngOnInit() {
        super.ngOnInit();
        this.elements = {
            'firstName': this.firstNameElement.nativeElement,
            'jobTitleDropDownList': this.jobTitleDropdownListElement,
        };
    }

    uploadSaveUrl = this.appUtil.getEndPoint('Employee/UploadImage');
    uploadRemoveUrl = this.appUtil.getEndPoint('Employee/RemoveImage');


    onCreateEmployee(f: NgForm) {
        this.service.http.doPost('Employee/Create', this.model)
            .subscribe((response) => {
            }, error => {
                let errors: any[] = JSON.parse(error.error.errorMessage);
                for (var i = 0; i < errors.length; i++) {
                    let error: any = errors[i];
                    this.validationRules[error.FieldName] = { 'serverValidationError': error.ValidationMessage }
                }

                this.validateAllFields(false);
            });
    }

    onCancel() {
        for (var key in this.mainForm.controls) {
            var control = this.mainForm.controls[key];
            control.clearValidators();
            control.setErrors(null);
        }

        this.formErrors = {};
    }

    valuechange(event: any) {
        var currentControl = this.mainForm.form.get(event.currentTarget.name);
        currentControl.clearValidators();
        currentControl.setErrors(null);
        delete this.formErrors[event.currentTarget.name];
        //delete this.validationRules[event.currentTarget.name];

        //this.setValidators();

    }

    successEventHandler(e: SuccessEvent) {
        var fileBlobPointer = e.response.body;
        if (!this.appUtil.isNullOrEmpty(fileBlobPointer)) {
            this.model.imageUrl = fileBlobPointer;
        }
        console.log(fileBlobPointer);
    }

    errorEventHandler(e: ErrorEvent) {
        console.log('An error occurred');
    }

    removeEventHandler(e: RemoveEvent) {
        e.headers = this.appUtil.getBearerTokenHeaders(e.headers);
        e.data = { blobPointerPath: this.model.imageUrl };
    }

    /* ==== VALIDATION ==== */
    setValidators() {
        let control = this.mainForm.form.get('firstName');
        if (control) {
            control.setValidators([Validators.required, this.customCheckValueLength('customLength', 5)]);
            control.updateValueAndValidity();
        }
    }

    customCheckValueLength(errorPropertyName: string, length: number): ValidatorFn {
        return (currentControl: AbstractControl): { [key: string]: any } => {
            if (!this.appUtil.isNullOrEmpty(currentControl.value) && currentControl.value.length < length) {
                let error = {};
                error[errorPropertyName] = true;
                return error;
            }
        }
    }

    validationRules = {
        'firstName': {
            'required': 'First Name is required',
            'customLength': 'Minimum 5'
        }
    };
}
