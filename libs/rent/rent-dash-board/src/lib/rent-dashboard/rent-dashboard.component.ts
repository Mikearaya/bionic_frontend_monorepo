import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  RentDashBoardModel,
  RentDashBoardApiService
} from '@bionic/apis/rent/rent-dash-board-api';

@Component({
  selector: 'bionic-rent-dashboard',
  templateUrl: './rent-dashboard.component.html',
  styleUrls: ['./rent-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RentDashboardComponent implements OnInit {
  public dashboard: RentDashBoardModel;

  constructor(private systemConf: RentDashBoardApiService) {}

  ngOnInit() {
    this.systemConf
      .getDashBoardData()
      .subscribe(data => (this.dashboard = data));
  }
}
