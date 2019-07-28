import { Component, OnInit } from '@angular/core';
import { FreightOrderPaymentRequestApiService } from '@bionic/apis/shipment/freight-order-payment-request-api';
import { QueryString, CustomGridColumns } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';

@Component({
  selector: 'bionic-freight-order-payment-request-view',
  templateUrl: './freight-order-payment-request-view.component.html',
  styleUrls: ['./freight-order-payment-request-view.component.css']
})
export class FreightOrderPaymentRequestViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'FreightOrderId',
      header: 'Freight Order',
      visible: true,
      type: 'string',
      width: 100
    },

    {
      key: 'Customer',
      header: 'Customer',
      visible: true,
      width: 150,
      type: 'string'
    },
    {
      key: 'Status',
      header: 'Status',
      visible: true,
      type: 'string',
      width: 50
    },
    {
      key: 'RequestedDate',
      header: 'Requested On',
      visible: false,
      width: 70,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'ScheduledDate',
      header: 'Scheduled',
      visible: true,
      width: 70,
      type: 'date',
      format: 'yMd'
    }
  ];

  constructor(private paymentRequestApi: FreightOrderPaymentRequestApiService) {
    this.data = this.paymentRequestApi;
    this.paymentRequestApi.execute(new QueryString());
  }

  ngOnInit() {
    this.paymentRequestApi.execute(new QueryString());
  }

  deletePaymentRequest(data: any) {
    this.paymentRequestApi
      .deletePaymentRequest(data['Id'])
      .subscribe(() => alert('Trailor delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.paymentRequestApi.execute(state);
  }
}
