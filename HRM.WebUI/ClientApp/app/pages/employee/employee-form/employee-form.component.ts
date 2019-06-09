import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'ClientApp/app/base.component';
import { EmployeeFormService } from '../employee.service';
import { AppUtil } from '../../../app.util';
import { ActivatedRoute } from '@angular/router';
import { UploadEvent, RemoveEvent, FileInfo, SelectEvent, FileRestrictions, SuccessEvent } from '@progress/kendo-angular-upload';

@Component({
    selector: 'employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent extends BaseFormComponent implements OnInit {

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
    }

    uploadSaveUrl = this.appUtil.getEndPoint('Employee/UploadImage'); 
    uploadRemoveUrl = this.appUtil.getEndPoint('Employee/RemoveImage');


    onCreateEmployee() {
    }

    successEventHandler(e: SuccessEvent) {
        var fileBlobPointer = e.response.body;
        if (!this.appUtil.isNullOrEmpty(fileBlobPointer)) {
            this.model.imageUrl = fileBlobPointer;
        }
    }

    errorEventHandler(e: ErrorEvent) {
        console.log('An error occurred');
    }

    removeEventHandler(e: RemoveEvent) {
        e.headers = this.appUtil.getBearerTokenHeaders(e.headers);
        e.data = { blobPointerPath: this.model.imageUrl };
    }
}
