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
        sort: [], skip: 0, take: 20, filter: this.defaultCompositeFilterDescriptor
    };

    public defaultState: QueryState = {
        sort: [], skip: 0, take: 20, filter: this.defaultCompositeFilterDescriptor
    };

    constructor(public baseService: HrmBaseService, public url: string) {
        super(null);
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.baseService.doGet({ url: url, isGridData: false, params: params });
    }

    public query(state: any): void {
        delete state.group;
        this.state = state;
        var queryString = `?state=${JSON.stringify(this.state)}`;

        if (!this.baseService.appUtil.isNullOrEmpty(queryString)) {
            this.baseService.appUtil.location.replaceState(this.url, this.baseService.appUtil.encodedQueryString(this.state));
        }

        this.fetch(this.url, this.state)
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
    constructor(private http: HrmBaseService) { }

    public getData(url: string, params?: any): Observable<any> {
        return this.http.doGet({ url, params });
    }

    public postData(url: string, data?: any): Observable<any> {
        return this.http.doPost(url, data);
    }
}
