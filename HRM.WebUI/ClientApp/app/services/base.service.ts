import { Injectable } from '@angular/core';
import { AppData, AppUtil, HttpClientRequest } from './app.util';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as moment from 'moment/moment';
import { GridDataResult } from '@progress/kendo-angular-grid';


@Injectable()
export class HrmBaseService {
    private unknowErrorMessage: string = '';

    constructor(private http: HttpClient, public appUtil: AppUtil) {
        this.http.get('/account/createToken', {}).subscribe((data: any) => {
            this.appUtil.cookieService.set('HRMAccessToken', data.token);
        });;
    }

    public doGet(request: HttpClientRequest): Observable<any> {
        var authenticationData = this.GetAuthenticationData();
        if (this.appUtil.isNullOrEmpty(request.isGridData)) {
            request.isGridData = false;
        }
        if (authenticationData) {
            //var endPoint = this.appUtil.getEndPoint(request.url);
            //if (!this.appUtil.isNullOrEmpty(request.queryString)) {
            //    endPoint = `${endPoint}${request.queryString}`;
            //}

            let params = new HttpParams();
            params = params.append('state', JSON.stringify(request.params));
            debugger;
            return this.http.get(this.appUtil.getEndPoint(request.url), { params: params, headers: authenticationData.headers })
                .map((response) => {
                    let formattedResponseData = parseResponse(response);
                    return request.isGridData ? (<GridDataResult>{ data: formattedResponseData, total: 20 }) : formattedResponseData;
                })
                .catch((error: HttpErrorResponse) => {
                    if (error.status === 403) {
                        window.location.href = "account/logout";
                    } else {
                        if (error.status === 401) {
                            window.location.href = `app/error?errorCode=${error.status}`;
                        }
                    }

                    return parseObservableResponseError(error, this.unknowErrorMessage);
                });
        }

        location.href = 'account/login';
    }

    public doPost(url: string, data?: any): Observable<any> {
        var authenticationData = this.GetAuthenticationData();
        if (authenticationData) {
            return this.http.post(this.appUtil.getEndPoint(url), data, authenticationData);
        }

        //location.href = 'account/login';
    }

    private GetAuthenticationData() {
        var accessToken = this.appUtil.cookieService.get('HRMAccessToken');
        if (accessToken) {
            return {
                headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.appUtil.cookieService.get('HRMAccessToken') })
            };
        }

        return null;
    }
}

export function parseObservableResponseError(response, unknowErrorMessage): Observable<any> {
    if (response.hasOwnProperty("errorMessage")) {
        return Observable.throw(response);
    }

    // always create an error object
    let err = { response: '', errorMessage: '', additionalData: {} };
    err.response = response;
    err.errorMessage = response.statusText;

    try {
        let data = response.json();
        if (data && data.errorMessage) {
            Object.assign(err, data);
        }
    }
    catch (ex) { }

    if (!err.errorMessage)
        err.errorMessage = unknowErrorMessage;

    return Observable.throw(err);
}

export function calculateOffsetBetweenSystemAndUserTimeZone() {
    let systemOffset = ((new Date()).getTimezoneOffset() / 60) * -1;
    let userOffset = AppData.user.timeZone !== null ? AppData.user.timeZone.offset : 0;
    let offsetDelta = userOffset - systemOffset;

    return offsetDelta;
}

export function parseResponse(jsonResponse, isObject: boolean = false) {
    try {
        for (let item in jsonResponse) {
            if (jsonResponse[item] !== null) {
                if (typeof (jsonResponse[item]) == 'object') {
                    parseResponse(jsonResponse[item], true);
                } else if (item.endsWith('Date') || item.startsWith('date')) {
                    jsonResponse[item] = new Date(jsonResponse[item]);

                    let offsetDelta = calculateOffsetBetweenSystemAndUserTimeZone();
                    jsonResponse[item] = moment(jsonResponse[item]).add(offsetDelta, 'hours').toDate();
                }
            }
        }
    } catch (ex) {
        return null;
    }

    return jsonResponse;
}