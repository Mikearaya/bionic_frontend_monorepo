import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';
import { PurchaseOrderPaymentsApiService } from '@bionic/apis/procurment/purchase-order-payment-api';
import { QueryString } from '@bionic/components/data-grid';
import { purchaseOrderPaymentColumnBluePrint } from './purchase-order-payment-view-column.model';

@Component({
  selector: 'bionic-purchase-order-payment-view',
  templateUrl: './purchase-order-payment-view.component.html',
  styleUrls: ['./purchase-order-payment-view.component.css']
})
export class PurchaseOrderPaymentViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = purchaseOrderPaymentColumnBluePrint;

  constructor(
    private purchaseOrderPaymentApi: PurchaseOrderPaymentsApiService
  ) {
    this.data = this.purchaseOrderPaymentApi;
    this.purchaseOrderPaymentApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.purchaseOrderPaymentApi.execute(new QueryString());
  }

  deletePayment(data: any): void {
    this.purchaseOrderPaymentApi
      .deletePurchaseOrderPayment(data['Id'])
      .subscribe(
        () => this.notification.showMessage('Purchase Order Deleted'),
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Unable to Delete Stock Batch',
            'error'
          );
        }
      );
  }

  onDataStateChange(state: QueryString): void {
    this.purchaseOrderPaymentApi.execute(state);
  }
}
