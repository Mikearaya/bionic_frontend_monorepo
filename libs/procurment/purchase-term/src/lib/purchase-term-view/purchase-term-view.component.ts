import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '@bionic/components/notification';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { QueryString } from '@bionic/components/data-grid';
import { purchaseTermColumnBluePrint } from './purchase-term-column.model';
import { PurchaseTermApiService } from '@bionic/apis/procurment/purchase-term-api';

@Component({
  selector: 'bionic-purchase-term-view',
  templateUrl: './purchase-term-view.component.html',
  styleUrls: ['./purchase-term-view.component.css']
})
export class PurchaseTermViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = purchaseTermColumnBluePrint;

  constructor(private purchaseTermApi: PurchaseTermApiService) {
    this.data = this.purchaseTermApi;
    this.purchaseTermApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.purchaseTermApi.execute(new QueryString());
  }

  deletePurchaseTerm(data: any): void {
    this.purchaseTermApi.deletePurchaseTerm(data['Id']).subscribe(
      () => this.notification.showMessage('Purchase term Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage(
          'Unable to Delete Purchase term',
          'error'
        );
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.purchaseTermApi.execute(state);
  }
}
