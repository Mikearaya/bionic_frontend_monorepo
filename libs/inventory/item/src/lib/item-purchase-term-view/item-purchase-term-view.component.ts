import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  GridComponent,
  ToolbarItems,
  EditSettingsModel,
  CommandModel,
  Column,
  IRow
} from '@syncfusion/ej2-angular-grids';

import { closest } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { NotificationComponent } from '@bionic/components/notification';
import {
  PurchaseTermView,
  PurchaseTermApiService
} from '@bionic/apis/procurment/purchase-term-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-item-purchase-term-view',
  templateUrl: './item-purchase-term-view.component.html',
  styleUrls: ['./item-purchase-term-view.component.css']
})
export class ItemPurchaseTermViewComponent {
  purchaseTerms: PurchaseTermView[];

  @Input()
  public itemId: number;

  @ViewChild('grid')
  public grid: GridComponent;
  @ViewChild('notification')
  public notification: NotificationComponent;
  /*
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
    if (this.itemId !== 0) {
      this.purchaseTermApi
        .getItemPurchseTerms(this.itemId)
        .subscribe((data: PurchaseTermView[]) => (this.purchaseTerms = data));
    }
  }

  editTerm(args: Event): void {
    const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
      closest(<Element>args.target, '.e-row').getAttribute('data-uid')
    );
    this.route.navigate([
      `procurments/purchase-terms/${rowObj.data['id']}/update`
    ]);
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
    if (args.item.id && this.itemId) {
      this.route.navigate([`procurments/purchase-terms/item/${this.itemId}`]);
    }
  } */
}
