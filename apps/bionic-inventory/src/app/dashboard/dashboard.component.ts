import { Component, OnInit } from '@angular/core';
import {
  CrmReportApiService,
  DashboardSummaryViewModel
} from '@bionic/apis/crm/crm-report-api';
import {
  InventoryReportApiService,
  InventoryDashboardView
} from '@bionic/apis/inventory/inventory-report-api';

@Component({
  selector: 'bionic-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public dashboardItems: {
    name: string;
    class: string;
    icon: string;
    value: number;
  }[] = [
    {
      name: 'Items',
      class: 'Liability',
      icon: 'fas fa-funnel-dollar',
      value: 0
    },
    {
      name: 'Planned Items',
      class: 'Expence',
      icon: 'fas fa-comments-dollar',
      value: 0
    },
    {
      name: 'Recieved Items',
      class: 'Liability',
      icon: 'fas fa-funnel-dollar',
      value: 0
    },
    {
      name: 'Booked Shippings',
      class: 'Expence',
      icon: 'fas fa-comments-dollar',
      value: 0
    },
    {
      name: 'Picked',
      class: 'Liability',
      icon: 'fas fa-funnel-dollar',
      value: 0
    }
  ];
  constructor(private inventoryReportApi: InventoryReportApiService) {}

  ngOnInit() {
    this.inventoryReportApi
      .getInventoryDashboardSummary()
      .subscribe((data: InventoryDashboardView) => {
        this.dashboardItems[0].value = data.TotalItems;
        this.dashboardItems[1].value = data.TotalPlannedItems;
        this.dashboardItems[2].value = data.TotalRecievedItems;
        this.dashboardItems[3].value = data.TotalBookedShippings;
        this.dashboardItems[4].value = data.TotalPickedShippings;
      });
  }

  itemClicked(items: any) {
    if (items.name === 'Unposted Entries') {
    }
  }
}
