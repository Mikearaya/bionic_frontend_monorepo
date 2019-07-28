import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { FreightOrderPaymentRecievingApiService } from '@bionic/apis/shipment/freight-order-payment-recieving-api';

@Component({
  selector: 'bionic-freight-order-payment-recieving-view',
  templateUrl: './freight-order-payment-recieving-view.component.html',
  styleUrls: ['./freight-order-payment-recieving-view.component.css']
})
export class FreightOrderPaymentRecievingViewComponent implements OnInit {
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
      key: 'FreightOrderNo',
      header: 'Freight Order No',
      visible: true,
      type: 'string',
      width: 100
    },

    {
      key: 'Customer',
      header: 'Customer',
      visible: true,

      type: 'string'
    },
    {
      key: 'RecievedAmount',
      header: 'Recieved Amount',
      visible: false,
      width: 70,
      type: 'number',
      format: 'N2'
    },
    {
      key: 'BankName',
      header: 'Deposited To',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'CheckNo',
      header: 'Check No',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'RecievedDate',
      header: 'Recieved On',
      visible: true,
      width: 70,
      type: 'date',
      format: 'yMd'
    }
  ];

  constructor(
    private paymentRecievingApi: FreightOrderPaymentRecievingApiService
  ) {
    this.data = this.paymentRecievingApi;
    this.paymentRecievingApi.execute(new QueryString());
  }

  ngOnInit() {
    this.paymentRecievingApi.execute(new QueryString());
  }

  deletePaymentRecieving(data: any) {
    this.paymentRecievingApi
      .deletePaymentRecieving(data['Id'])
      .subscribe(() => alert('Payment Recieving delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.paymentRecievingApi.execute(state);
  }
}
