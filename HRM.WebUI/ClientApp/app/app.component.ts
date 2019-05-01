import { Component, OnInit } from '@angular/core';
import { LayoutService } from './components/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;

  constructor(
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}
