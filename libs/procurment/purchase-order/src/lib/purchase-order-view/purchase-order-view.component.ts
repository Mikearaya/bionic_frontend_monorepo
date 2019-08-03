import { DataSourceChangedEventArgs } from '@syncfusion/ej2-navigations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { purchaseOrderColumnBluePrint } from './purchase-order-view-column.model';
import { PurchaseOrderApiService } from '@bionic/apis/procurment/purchase-order-api';
import { HttpErrorResponse } from '@angular/common/http';
import { QueryString } from '@bionic/components/data-grid';
import { NotificationComponent } from '@bionic/components/notification';
import { Subject } from 'rxjs';

@Component({
  selector: 'bionic-purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
  styleUrls: ['./purchase-order-view.component.css']
})
export class PurchaseOrderViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataSourceChangedEventArgs>;

  public columnBluePrint = purchaseOrderColumnBluePrint;

  constructor(private purchaseOrderApi: PurchaseOrderApiService) {
    this.purchaseOrderApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.purchaseOrderApi.execute(new QueryString());
  }

  deletePurchaseOrder(data: any): void {
    this.purchaseOrderApi.deletePurchaseOrder(data['Id']).subscribe(
      () => this.notification.showMessage('Purchase Order Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Stock Batch', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.purchaseOrderApi.execute(state);
  }
}
