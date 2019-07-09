import { OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { AppUtil, QueryState } from './app.util';
import { HrmListService, CommunicationService, HrmFormService } from './app.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UploadEvent, RemoveEvent, SelectEvent } from '@progress/kendo-angular-upload';
import { NgForm, Validators } from '@angular/forms';

export class BaseComponent implements OnInit {
    public mode: string = '';
    public model: any = {};
    defaultDropdownItem: { text: string, value: number } = { text: "Select item...", value: null };

    constructor(protected appUtil: AppUtil) { }

    ngOnInit() {
        this.routingHandler();
    }

    routingHandler() {
        // TO DO
        //this.route.params.subscribe((param: Params) => {
        //    let formMode = param['mode'].toLowerCase();
        //});
    }
}

export class BaseFormComponent extends BaseComponent implements OnInit {
    @ViewChild('mainForm') mainForm: NgForm;

    formErrors: any = {};
    validationRules = {};
    serverValidationRules = {};
    protected elements: any = {};

    isFormInvalid: boolean;

    constructor(protected appUtil: AppUtil, public service: HrmFormService) {
        super(appUtil);
    }

    ngOnInit() {
        this.service.onLoadingData(false);
        this.isFormInvalid = true;

        this.service.getData('Employee/ListBooks').subscribe(x => {
            debugger;
            var data = x;
        });
    }

    uploadEventHandler(e: UploadEvent) {
        e.headers = this.appUtil.getBearerTokenHeaders(e.headers);
    }

    removeEventHandler(e: RemoveEvent) {
        e.headers = this.appUtil.getBearerTokenHeaders(e.headers);
    }

    selectEventHandler(e: SelectEvent) {
    }

    ngAfterViewChecked() {
        this.formChanged();
    }

    /* ==== CUSTOM FORM METHODS ==== */

    setValidators() {
    }

    /* ==== END CUSTOM FORM METHODS ==== */


    /* ==== VALIDATION ==== */
    formChanged() {
        if (this.mainForm) {
            this.setValidators();
            this.validateAllFields(true);
        }
    }

    validateAllFields(checkDirty: boolean) {
        if (!this.mainForm) { return; }
        const form = this.mainForm.form;

        for (const field in this.validationRules) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control) {
                const messages = this.validationRules[field];

                if (!this.appUtil.isNullOrEmpty(this.validationRules[field]['serverValidationError'])) {
                    control.setErrors({ 'serverValidationError': true });
                }

                if (control.invalid && control.touched) {
                    for (const key in control.errors) {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                } else if ((control.dirty || !checkDirty)) {
                    for (const key in control.errors) {
                        this.formErrors[field] += messages[key] + ' ';
                    }

                    control.markAsDirty();
                }
            }
        }

        this.isFormInvalid = !this.mainForm.valid;
    }

    focusFirstErrorElement() {
        for (const field in this.elements) {
            const control = this.mainForm.form.get(field);

            if (control && !control.valid) {
                control.markAsDirty();
                let el = this.elements[field];
                if (el) {
                    //IE11, firefox: fix screen dose not scroll to invalid control
                    window.scrollTo(0, el.wrapper.nativeElement.offsetParent.offsetTop);
                    el.focus();
                    break;
                }
            }
        }
    }

    /* ==== END VALIDATION ==== */
}

export class BaseListComponent extends BaseComponent implements OnInit {

    public view: Observable<GridDataResult>;

    constructor(public appUtil: AppUtil, public service: HrmListService) {
        super(appUtil);
    }

    ngOnInit() {
        this.service.onLoadingData(false);

        this.appUtil.activedRoute.queryParams.subscribe((params: Params) => {
            var state = params['state'];
            if (this.appUtil.isNullOrEmpty(state)) {
                this.service.state = this.service.defaultState;
            } else {
                try {
                    var stateObj = JSON.parse(state);
                    if (!this.appUtil.isInstanceOf<QueryState>(stateObj, this.service.state)) {
                        throw ("Invalid Query State Object.");
                    }

                    this.service.state = stateObj;

                } catch (e) {
                    window.location.href = `App/Error/?errorCode=404`;
                }
            }
        });

        // Entry point for querying data
        this.service.query(this.service.state);

        // this view will receive data as BehaviorSubject emit data.
        this.view = this.service.gridResult;
    }
}