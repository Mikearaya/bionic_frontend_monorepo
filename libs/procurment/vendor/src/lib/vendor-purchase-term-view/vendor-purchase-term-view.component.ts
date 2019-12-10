import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input
} from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { closest } from '@syncfusion/ej2-base';
import {
  Column,
  CommandModel,
  EditSettingsModel,
  GridComponent,
  IRow,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';

import { Router } from '@angular/router';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';
import {
  PurchaseTermView,
  PurchaseTermApiService
} from '@bionic/apis/procurment/purchase-term-api';

@Component({
  selector: 'bionic-vendor-purchase-term-view',
  templateUrl: './vendor-purchase-term-view.component.html',
  styleUrls: ['./vendor-purchase-term-view.component.css']
})
export class VendorPurchaseTermViewComponent implements AfterViewInit {
  purchaseTerms: PurchaseTermView[];

  @Input()
  public vendorId: number;

  @ViewChild('grid')
  public grid: GridComponent;
  @ViewChild('notification')
  public notification: NotificationComponent;

  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public commands: CommandModel[];

  public customAttributes: { class: string };
  public filterOptions: { type: string };

  constructor(
    private purchaseTermApi: PurchaseTermApiService,
    private route: Router
  ) {
    this.commands = [
      {
        buttonOption: {
          cssClass: 'e-flat',
          iconCss: 'e-edit e-icons',
          click: this.editTerm.bind(this)
        }
      },
      {
        buttonOption: {
          cssClass: 'e-flat',
          iconCss: 'e-delete e-icons',
          click: this.deleteTerm.bind(this)
        }
      }
    ];

    this.customAttributes = { class: 'custom-grid-header' };
    this.editSettings = {
      showDeleteConfirmDialog: true,
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true
    };
    this.toolbar = ['Add'];
  }

  ngAfterViewInit(): void {
    if (this.vendorId !== 0) {
      this.purchaseTermApi
        .getVendorPurchseTerms(this.vendorId)
        .subscribe((data: PurchaseTermView[]) => (this.purchaseTerms = data));
    }
  }

  editTerm(args: Event): void {
    const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
      closest(<Element>args.target, '.e-row').getAttribute('data-uid')
    );
    this.route.navigate([`purchase-terms/${rowObj.data['Id']}/update`]);
  }

  deleteTerm(args: Event): void {
    const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
      closest(<Element>args.target, '.e-row').getAttribute('data-uid')
    );
    this.purchaseTermApi.deletePurchaseTerm(rowObj.data['id']).subscribe(
      () => this.notification.showMessage('Purchase Term Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage(
          'Unable to Delete purchase term try again later',
          'error'
        );
      }
    );
  }

  toolbarClick(args: ClickEventArgs): void {
    console.log(args.item);
    if (args.item.id && this.vendorId) {
      this.route.navigate([`/purchase-terms/vendor/${this.vendorId}`]);
    }
  }
}
