import { Injectable, OnInit } from '@angular/core';
import { HrmHttpService } from './http.service'
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, window } from 'rxjs/operators';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, CompositeFilterDescriptor, FilterDescriptor } from '@progress/kendo-data-query';
import { QueryState } from './app.util';


@Injectable()
export class CommunicationService {
    public isDataLoadingEmitChangeSource: BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor() {}

    emitChange(isLoading: boolean) {
        this.isDataLoadingEmitChangeSource.next(isLoading);
    }
}

@Injectable()
export class HrmBaseService {

    constructor(private communicationService: CommunicationService, public http: HrmHttpService) {
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.http.doGet({ url, params });
    }

    public postData(url: string, data?: any): Observable<any> {
        return this.http.doPost(url, data);
    }

    public onLoadingData(isLoading: boolean) {
        this.communicationService.emitChange(isLoading);
    }
}

export abstract class HrmListService extends HrmBaseService {
    public gridResult: BehaviorSubject<GridDataResult> = new BehaviorSubject(null);

    public state: QueryState = {
        skip: 0, take: 20
    };

    public defaultState: QueryState = {
        skip: 0, take: 20
    };

    constructor(communicationService: CommunicationService,
        public http: HrmHttpService,
        public apiDataUrl: string,
        public accessedUrl?: string) {

        super(communicationService, http);
    }

    public query(state: any): void {
        this.state = state;
        this.onLoadingData(true);
        var queryString = `?state=${JSON.stringify(state)}`;

        if (!this.http.appUtil.isNullOrEmpty(queryString)) {
            var url = this.http.appUtil.isNullOrEmpty(this.accessedUrl) ? this.apiDataUrl : this.accessedUrl;
            // encode querystring
            this.http.appUtil.location.replaceState(url, this.http.appUtil.encodedQueryString(state));
        }

        this.fetch(this.apiDataUrl, state)
            .subscribe(x => {
                this.onLoadingData(false);
                this.gridResult.next(x);
            });
    }

    private fetch(url: string, state: any): Observable<GridDataResult> {
        return this.http.doGet({ url: url, isGridData: true, params: state});
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.query(state);
    }
}

export abstract class HrmFormService extends HrmBaseService {
    constructor(communicationService: CommunicationService, http: HrmHttpService) {
        super(communicationService, http);
    }
}
