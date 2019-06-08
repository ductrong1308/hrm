import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LayoutService } from './components/index';
import { BaseComponent } from './base.component';
import { AppUtil } from './app.util';
import { HrmBaseService, CommunicationService } from './app.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'hrm-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public customLayout: boolean;
    public isLoading: boolean = true;

    @Output() someEvent = new EventEmitter();

    constructor(public appUtil: AppUtil, private layoutService: LayoutService, private communicationService: CommunicationService) {
        communicationService.changeEmitted$.subscribe(data => {
            debugger;
            this.isLoading = data;
        });
    }

    ngOnInit() {
        this.layoutService.isCustomLayout.subscribe((value: boolean) => {
            this.customLayout = value;
        });
    }
}
