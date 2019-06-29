import { Component, OnInit } from '@angular/core';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { PartnersPaymentApiService } from '@bionic/apis/rent/partners-payment-api';

@Component({
  selector: 'bionic-partners-payment-view',
  templateUrl: './partners-payment-view.component.html',
  styleUrls: ['./partners-payment-view.component.css']
})
export class PartnersPaymentViewComponent implements OnInit {
  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
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
      format: 'dYm',
      type: 'datetime'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 100,
      format: 'dYm',
      type: 'datetime'
    }
  ];

  public data: Subject<DataStateChangeEventArgs>;
  constructor(private partnerPaymentApi: PartnersPaymentApiService) {
    this.data = this.partnerPaymentApi;
    this.partnerPaymentApi.execute(new QueryString());
  }

  ngOnInit() {
    this.partnerPaymentApi.execute(new QueryString());
  }
  onDataStateChange(state: QueryString): void {
    this.partnerPaymentApi.execute(state);
  }

  deletePartnerPayment(data: any) {
    this.partnerPaymentApi.deletePartnerPayment(data['Id']).subscribe(
      () => {},
      () => {
        alert(
          "Can not delete partner payment because it's been used in a transaction"
        );
      }
    );
  }
}
