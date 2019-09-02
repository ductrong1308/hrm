import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { LayoutService } from './components/index';
import { AppUtil } from './app.util';
import { CommunicationService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'hrm-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public customLayout: boolean;
    public isLoading: boolean = true;

    constructor(private layoutService: LayoutService,
        private communicationService: CommunicationService,
        private cdRef: ChangeDetectorRef,
        private http: HttpClient,
        public appUtil: AppUtil) {
    }

    ngOnInit() {
        this.layoutService.isCustomLayout.subscribe((value: boolean) => {
            this.customLayout = value;
        });

        this.communicationService.isDataLoadingEmitChangeSource.subscribe(data => {
            this.isLoading = data;
        });

        this.http.get('/account/createToken', {}).subscribe((data: any) => {
            this.appUtil.cookieService.set('HRMAccessToken', data.token);
        });
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
}
