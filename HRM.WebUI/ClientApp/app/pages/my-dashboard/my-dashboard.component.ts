import { Component, OnInit } from '@angular/core';
import { MyDashboardListService } from './my-dashboard.service';

@Component({
    selector: 'app-my-dashboard',
    templateUrl: './my-dashboard.component.html',
    styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

    constructor(private listService: MyDashboardListService) { }

    ngOnInit() {
        debugger;
        //this.listService.getData("employee/list")
    }

}
