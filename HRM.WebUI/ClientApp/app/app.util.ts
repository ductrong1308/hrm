import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { State } from '@progress/kendo-data-query';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppUtil {
    constructor(
        public router: Router,
        public activedRoute: ActivatedRoute,
        public cookieService: CookieService,
        public location: Location) {
    }

    public getBearerTokenHeaders(httpHeaders?: HttpHeaders) {
        if (!httpHeaders) {
            httpHeaders = new HttpHeaders();
        }

        var accessToken = this.cookieService.get('HRMAccessToken');
        if (accessToken) {
            httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + this.cookieService.get('HRMAccessToken'));
        }

        return httpHeaders;
    }

    public encodedQueryString(state: QueryState) {
        return `?state=${encodeURIComponent(JSON.stringify(state))}`;
    }

    public getEndPoint(requestedUrl: string) {
        return AppData.apiHost + requestedUrl;
    }

    public isNullOrEmpty(data: any) {
        if (typeof (data) === 'string') {
            var formattedData = data.trim();
            return formattedData === '';
        } else {
            return (data === null || data === {} || data === undefined); 
        }
    }

    // Checks if an object matches an interface, recursively.
    public isInstanceOf<TInterface>(object: any, interfaceObj: TInterface): boolean {
        for (let item in interfaceObj) {
            if (interfaceObj[item] !== null) {
                if (!(item in object)) {
                    return false;
                }
                else if (this.isPrimitive(interfaceObj[item]) && typeof interfaceObj[item] != typeof object[item]) {
                    return false;
                }
                else if (typeof interfaceObj[item] === 'object') {
                    if (!this.isInstanceOf(object[item], interfaceObj[item])) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    public isPrimitive(obj: any): boolean {
        return obj && (
            typeof (obj) === "string" ||
            typeof (obj) === "number" ||
            typeof (obj) === "boolean"
        );
    }
}

class UserData {
    public username: string = '';
    public role: string = '';
    public timeZone: any;
    public preferredLanguage: string = '';

    constructor() {
        var hrmAppData = (window["HRMAppData"] as any);
        this.username = hrmAppData.username;
        this.role = hrmAppData.role;
        this.timeZone = hrmAppData.timeZone;
        this.preferredLanguage = hrmAppData.preferredLanguage;
    }
}

export class AppData {
    public static apiHost = (window["HRMAppData"] as any).apiHost;
    public static user: UserData = (window["HRMAppData"] as any).user;
}

export interface HttpClientRequest {
    url: string,
    isGridData?: boolean,
    params?: any,
    queryString?: string
}

export interface QueryState extends State {
    showDeleted?: boolean;
    listMode?: number;
}




