import { Injectable } from '@angular/core';

@Injectable()
export class AppUtil {
    //public static apiHost: string = window["HRMAppData"].apiHost;
    //public static authUrl: string = window["HRMAppData"].authUrl;

    constructor() {}

    public getEndPoint(requestedUrl: string) {
        var apiHost = window["HRMAppData"].apiHost;
        debugger;
        return apiHost + requestedUrl;
    }
}


