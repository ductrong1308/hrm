import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { LayoutService } from './components/index';
import { AppUtil } from './app.util';
import { CommunicationService } from './app.service';

@Component({
    selector: 'hrm-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public customLayout: boolean;
    public isLoading: boolean = true;

    constructor(private layoutService: LayoutService, private communicationService: CommunicationService, private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.layoutService.isCustomLayout.subscribe((value: boolean) => {
            this.customLayout = value;
        });

        this.communicationService.isDataLoadingEmitChangeSource.subscribe(data => {
            this.isLoading = data;
        });
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
}
