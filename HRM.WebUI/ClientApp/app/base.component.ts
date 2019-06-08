import { OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { AppUtil, QueryState } from './app.util';
import { HrmListService, CommunicationService } from './app.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UploadEvent, RemoveEvent, SelectEvent } from '@progress/kendo-angular-upload';

export class BaseComponent {

    @Output() sendDataToParent = new EventEmitter<boolean>();

    constructor(protected appUtil: AppUtil) { }

    public resetStatus(newValue: boolean) {
        this.sendDataToParent.emit(newValue);
    }
}

export class BaseFormComponent extends BaseComponent implements OnInit {
    constructor(protected appUtil: AppUtil, protected route: ActivatedRoute) {
        super(appUtil);
    }

    public mode: string = '';

    public model: any = {};

    public defaultDropdownItem: { text: string, value: number } = { text: "Select item...", value: null };

    ngOnInit() {
        this.routingHandler();
    }

    routingHandler() {
        // TO DO
        //this.route.params.subscribe((param: Params) => {
        //    let formMode = param['mode'].toLowerCase();
        //});
    }

    uploadEventHandler(e: UploadEvent) {
        e.headers = this.appUtil.getBearerTokenHeaders(e.headers);
    }

    removeEventHandler(e: RemoveEvent) {
        e.headers = this.appUtil.getBearerTokenHeaders(e.headers);
    }

    selectEventHandler(e: SelectEvent) {
    }
}

export class BaseListComponent extends BaseComponent implements OnInit {

    public view: Observable<GridDataResult>;

    constructor(public appUtil: AppUtil, public service: HrmListService, private communicationService: CommunicationService) {
        super(appUtil);
    }

    ngOnInit() {

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

        this.service.query(this.service.state);

        // this view will receive data as BehaviorSubject emit data.
        this.view = this.service.gridResult;

        this.service.isModelLoading.subscribe((value: boolean) => {
            debugger;
            this.communicationService.emitChange(value);
        });
    }
}