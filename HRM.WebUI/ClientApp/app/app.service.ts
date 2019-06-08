import { Injectable } from '@angular/core';
import { HrmHttpService } from './http.service'
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, window } from 'rxjs/operators';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, CompositeFilterDescriptor, FilterDescriptor } from '@progress/kendo-data-query';
import { QueryState } from './app.util';


@Injectable()
export class CommunicationService {
    constructor() { }

    private emitChangeSource = new Subject<boolean>();

    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(isLoading: boolean) {
        this.emitChangeSource.next(isLoading);
    }
}

@Injectable()
export class HrmBaseService {
    public isModelLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
}

export abstract class HrmListService extends HrmBaseService {
    public gridResult: BehaviorSubject<GridDataResult> = new BehaviorSubject(null);

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

    constructor(public httpService: HrmHttpService, public apiDataUrl: string, public accessedUrl?: string) {
        super();
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.httpService.doGet({ url: url, isGridData: false, params: params });
    }

    public query(state: any): void {
        this.isModelLoading.next(true);
        this.state = state;
        var queryString = `?state=${JSON.stringify(state)}`;

        if (!this.httpService.appUtil.isNullOrEmpty(queryString)) {
            var url = this.httpService.appUtil.isNullOrEmpty(this.accessedUrl) ? this.apiDataUrl : this.accessedUrl;
            this.httpService.appUtil.location.replaceState(url, this.httpService.appUtil.encodedQueryString(state));
        }

        this.fetch(this.apiDataUrl, state)
            .subscribe(x => {
                this.isModelLoading.next(false);
                this.gridResult.next(x);
            });
    }

    private fetch(url: string, state: any): Observable<GridDataResult> {
        return this.httpService.doGet({ url: url, isGridData: true, params: state});
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.query(state);
    }
}

export abstract class HrmFormService extends HrmBaseService {
    constructor(private http: HrmHttpService) {
        super();
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.http.doGet({ url, params });
    }

    public postData(url: string, data?: any): Observable<any> {
        return this.http.doPost(url, data);
    }
}
