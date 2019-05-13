import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppUtil } from './app.util';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class HRMBaseService {
    constructor(private http: Http, private appUtil: AppUtil) { }

    public doGet(url: string, params?: any): Observable<any> {
        return this.http.get(this.appUtil.getEndPoint(url), params);
    }

    public doPost(url: string, data?: any): Observable<any> {
        return this.http.post(this.appUtil.getEndPoint(url), data);
    }
}