import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { AppUtil, QueryState } from './app.util';
import { HrmListService } from './app.service';
import { Params } from '@angular/router';

export class BaseComponent{
    constructor(protected appUtil: AppUtil) { }
}

export class BaseFormComponent extends BaseComponent implements OnInit {
    ngOnInit() {}
}

export class BaseListComponent extends BaseComponent implements OnInit {

    public view: Observable<GridDataResult>;

    constructor(public appUtil: AppUtil, public service: HrmListService) {
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
        this.view = this.service;
    }
}