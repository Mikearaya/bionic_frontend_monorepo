import { Component, OnInit } from '@angular/core';

import { purchaseRecievingColumnBluePrint } from './purchase-recieving-view-column.model';
import {
  PurchaseOrderView,
  PurchaseOrderApiService
} from '@bionic/apis/procurment/purchase-order-api';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { PurchaseRecievingApiService } from '@bionic/apis/procurment/purchase-recieving-api';
import { QueryString } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-purchase-recieving-view',
  templateUrl: './purchase-recieving-view.component.html',
  styleUrls: ['./purchase-recieving-view.component.css']
})
export class PurchaseRecievingViewComponent implements OnInit {
  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = purchaseRecievingColumnBluePrint;
  public customAttributes: { class: string };
  public filterOptions: { type: string };

  constructor(private purchaseRecievingApi: PurchaseRecievingApiService) {
    this.data = this.purchaseRecievingApi;
    this.purchaseRecievingApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.purchaseRecievingApi.execute(new QueryString());
  }

  onDataStateChange(query: QueryString): void {
    this.purchaseRecievingApi.execute(query);
  }
}
