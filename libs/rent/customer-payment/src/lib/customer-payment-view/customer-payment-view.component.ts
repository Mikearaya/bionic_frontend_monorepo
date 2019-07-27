import { Component, OnInit } from '@angular/core';
import { CustomersPaymentApiService } from '@bionic/apis/rent/customers-payment-api';
import { QueryString, CustomGridColumns } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';

@Component({
  selector: 'bionic-customer-payment-view',
  templateUrl: './customer-payment-view.component.html',
  styleUrls: ['./customer-payment-view.component.css']
})
export class CustomerPaymentViewComponent implements OnInit {
  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'CustomerName',
      header: 'Customer Name',
      visible: true,
      type: 'string',
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
      key: 'DateAdded',
      header: 'Added',
      visible: false,
      width: 100,
      format: 'yMd',
      type: 'date'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 100,
      format: 'yMd',
      type: 'date'
    }
  ];

  public data: Subject<DataStateChangeEventArgs>;
  constructor(private customerPaymentApi: CustomersPaymentApiService) {
    this.data = this.customerPaymentApi;
    this.customerPaymentApi.execute(new QueryString());
  }

  ngOnInit() {
    this.customerPaymentApi.execute(new QueryString());
  }
  onDataStateChange(state: QueryString): void {
    this.customerPaymentApi.execute(state);
  }

  deleteCustomerPayment(data: any) {
    this.customerPaymentApi.deleteCustomerPayment(data['Id']).subscribe(
      () => {},
      () => {
        alert(
          "Can not delete customer payment because it's been used in a transaction"
        );
      }
    );
  }
}
