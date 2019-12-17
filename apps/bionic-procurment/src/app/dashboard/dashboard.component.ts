import { Component, OnInit } from '@angular/core';
import {
  CrmReportApiService,
  DashboardSummaryViewModel
} from '@bionic/apis/crm/crm-report-api';
import {
  ProcurmentSummaryViewModel,
  ProcurmentReportApiService
} from '@bionic/apis/procurment/procurment-report-api';

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
      name: 'Vendors',
      class: 'Liability',
      icon: 'fas fa-funnel-dollar',
      value: 0
    },
    {
      name: 'Purchase Orders',
      class: 'Expence',
      icon: 'fas fa-comments-dollar',
      value: 0
    }
  ];
  constructor(private crmApi: ProcurmentReportApiService) {}

  ngOnInit() {
    this.crmApi
      .getProcurmentSummary()
      .subscribe((data: ProcurmentSummaryViewModel) => {
        this.dashboardItems[0].value = data.TotalVendors;
        this.dashboardItems[1].value = data.TotalPurchaseOrders;
      });
  }

  itemClicked(items: any) {
    if (items.name === 'Unposted Entries') {
    }
  }
}
