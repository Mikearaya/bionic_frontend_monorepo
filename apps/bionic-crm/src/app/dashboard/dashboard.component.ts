import { Component, OnInit } from '@angular/core';
import {
  CrmReportApiService,
  DashboardSummaryViewModel
} from '@bionic/apis/crm/crm-report-api';

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
      name: 'Customers',
      class: 'Liability',
      icon: 'fas fa-funnel-dollar',
      value: 0
    },
    {
      name: 'Customer Orders',
      class: 'Expence',
      icon: 'fas fa-comments-dollar',
      value: 0
    },
    {
      name: 'Invoices',
      class: 'Revenue',
      icon: 'fas fa-hand-holding-usd',
      value: 0
    }
  ];
  constructor(private crmApi: CrmReportApiService) {}

  ngOnInit() {
    this.crmApi
      .getDashboardSummary()
      .subscribe((data: DashboardSummaryViewModel) => {
        this.dashboardItems[0].value = data.TotalCustomerOrders;
        this.dashboardItems[1].value = data.TotalCustomerOrders;
        this.dashboardItems[2].value = data.TotalInvoices;
      });
  }

  itemClicked(items: any) {
    if (items.name === 'Unposted Entries') {
    }
  }
}
