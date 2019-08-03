import { Component, OnInit } from '@angular/core';

import { purchaseRecievingColumnBluePrint } from './purchase-recieving-view-column.model';
import {
  PurchaseOrderView,
  PurchaseOrderApiService
} from '@bionic/apis/procurment/purchase-order-api';

@Component({
  selector: 'bionic-purchase-recieving-view',
  templateUrl: './purchase-recieving-view.component.html',
  styleUrls: ['./purchase-recieving-view.component.css']
})
export class PurchaseRecievingViewComponent implements OnInit {
  public data: PurchaseOrderView[];

  public columnBluePrint = purchaseRecievingColumnBluePrint;
  public customAttributes: { class: string };
  public filterOptions: { type: string };

  constructor(private purchaseOrderApi: PurchaseOrderApiService) {}
  dataBound() {}

  ngOnInit(): void {}

  viewPurchaseOrder(args: Event): void {
    /*     const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
      closest(<Element>args.target, '.e-row').getAttribute('data-uid')
    );
    this.route.navigate([`${rowObj.data['id']}/new`], {
      relativeTo: this.activatedRoute
    }); */
  }
}
