import { Component, OnInit } from '@angular/core';
import { RemainingCustomerPaymentApiService } from '@bionic/apis/rent/reports-api';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { QueryString, CustomGridColumns } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-remaining-customer-payment-view',
  templateUrl: './remaining-customer-payment-view.component.html',
  styleUrls: ['./remaining-customer-payment-view.component.css']
})
export class RemainingCustomerPaymentViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;
  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'CustomerId',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'CustomerName',
      header: 'Partner Name',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'Amount',
      header: 'Total Amount',
      visible: true,
      format: 'C2',
      type: 'number',
      width: 150
    },
    {
      key: 'PaidAmount',
      header: 'Paid Amount',
      visible: true,
      format: 'C2',
      type: 'number',
      width: 150
    },
    {
      key: 'RemainingPayment',
      header: 'Remaining',
      visible: true,
      format: 'C2',
      type: 'number',
      width: 150
    }
  ];

  constructor(private remainingPaymentApi: RemainingCustomerPaymentApiService) {
    this.data = this.remainingPaymentApi;
    this.remainingPaymentApi.execute(new QueryString());
  }

  ngOnInit() {
    this.remainingPaymentApi.execute(new QueryString());
  }
  onDataStateChange(state: QueryString): void {
    this.remainingPaymentApi.execute(state);
  }
}
