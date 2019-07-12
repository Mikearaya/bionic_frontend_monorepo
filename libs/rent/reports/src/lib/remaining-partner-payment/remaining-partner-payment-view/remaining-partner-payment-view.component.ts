import { Component, OnInit } from '@angular/core';
import { RemainingPartnerPaymentApiService } from '@bionic/apis/rent/reports-api';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { QueryString, CustomGridColumns } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-remaining-partner-payment-view',
  templateUrl: './remaining-partner-payment-view.component.html',
  styleUrls: ['./remaining-partner-payment-view.component.css']
})
export class RemainingPartnerPaymentViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;
  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'PartnerId',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'PartnerName',
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
      key: 'RemainingAmount',
      header: 'Remaining',
      visible: true,
      format: 'C2',
      type: 'number',
      width: 150
    }
  ];

  constructor(private remainingPaymentApi: RemainingPartnerPaymentApiService) {
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
