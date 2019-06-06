import { Injectable } from '@angular/core';
import { HrmBaseService } from './base.service'
import { Observable, BehaviorSubject } from 'rxjs';
import { map, window } from 'rxjs/operators';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, CompositeFilterDescriptor, FilterDescriptor } from '@progress/kendo-data-query';
import { QueryState } from './app.util';

export abstract class HrmListService extends BehaviorSubject<GridDataResult>{
    private defaultCompositeFilterDescriptor: CompositeFilterDescriptor = {
        filters: [{
            field: '',
            operator: '',
            value: ''
        }],
        logic: 'and'
    };
    public state: QueryState = {
        skip: 0, take: 20
    };

    public defaultState: QueryState = {
        skip: 0, take: 20
    };

    constructor(public baseService: HrmBaseService, public apiDataUrl: string, public accessedUrl?: string) {
        super(null);
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.baseService.doGet({ url: url, isGridData: false, params: params });
    }

    public query(state: any): void {
        this.state = state;
        var queryString = `?state=${JSON.stringify(state)}`;

        if (!this.baseService.appUtil.isNullOrEmpty(queryString)) {
            var url = this.baseService.appUtil.isNullOrEmpty(this.accessedUrl) ? this.apiDataUrl : this.accessedUrl;
            this.baseService.appUtil.location.replaceState(url, this.baseService.appUtil.encodedQueryString(state));
        }

        this.fetch(this.apiDataUrl, state)
            .subscribe(x => {
                super.next(x);// BehaviorSubject emit data for subscribers
            });
    }

    private fetch(url: string, state: any): Observable<GridDataResult> {
        return this.baseService.doGet({ url: url, isGridData: true, params: state});
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.query(state);
    }
}

export abstract class HrmFormService {
    constructor(private http: HrmBaseService) {
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.http.doGet({ url, params });
    }

    public postData(url: string, data?: any): Observable<any> {
        return this.http.doPost(url, data);
    }
}
