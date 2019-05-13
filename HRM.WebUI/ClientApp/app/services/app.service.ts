import { Injectable } from '@angular/core';
import { HRMBaseService } from './base.service'
import { Observable } from 'rxjs';

export abstract class ListService {
    public serviceData: any[];

    constructor(private http: HRMBaseService, private url: string) {
        this.getData(url).subscribe(x => {
            var data = x;
            debugger;
        });
    }

    public getData(url: string, params?: any): Observable<any> {
        return this.http.doGet(url, params);
    }
}

export abstract class FormService {
    constructor(private http: HRMBaseService) { }

    public getData(url: string, params?: any): Observable<any> {
        return this.http.doGet(url, params);
    }

    public postData(url: string, data?: any): Observable<any> {
        return this.http.doPost(url, data);
    }
}
