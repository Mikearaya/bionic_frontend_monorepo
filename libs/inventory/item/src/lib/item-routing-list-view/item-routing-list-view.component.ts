import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
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

@Component({
  selector: 'bionic-item-routing-list-view',
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddPurchaseOrders'"
      [updatePrivilage]="'canEditPurchaseOrders'"
      [deletePrivilage]="'canDeleteItems'"
      [showPdfExport]="true"
      [showPrint]="true"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>

    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./item-routing-list-view.component.css']
})
export class ItemRoutingListViewComponent {
  @ViewChild('notification')
  public notification: NotificationComponent;
  @Input()
  public itemId: number;

  data: any[] = [];
  /* public data: RoutingViewModel[]; */
  /*
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public commands: CommandModel[];

  public customAttributes: { class: string };
  public filterOptions: { type: string };

  constructor(private routingApi: RoutingApiService, private route: Router) {
    this.commands = [
      {
        buttonOption: {
          cssClass: 'e-flat',
          iconCss: 'e-edit e-icons',
          click: this.editRoute.bind(this)
        }
      },
      {
        buttonOption: {
          cssClass: 'e-flat',
          iconCss: 'e-delete e-icons',
          click: this.deleteRoute.bind(this)
        }
      }
    ];

    this.customAttributes = { class: 'info-grid-header' };
    this.filterOptions = { type: 'Menu' }; // put unique filter menue for each column based on the column type

    this.editSettings = {
      showDeleteConfirmDialog: true,
      allowEditing: false,
      allowAdding: true,
      allowDeleting: false
    };
    this.toolbar = ['Add'];
  } */

  /*   ngAfterViewInit(): void {
    if (this.itemId !== 0) {
      this.routingApi
        .getItemRoutings(this.itemId)
        .subscribe(
          (data: RoutingViewModel[]) => (this.data = data),
          this.handleError
        );
    }
  }

  editRoute(args: Event): void {
    const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
      closest(<Element>args.target, '.e-row').getAttribute('data-uid')
    );
    this.route.navigate([`routings/${rowObj.data['id']}/update`]);
  }

  deleteRoute(args: Event): void {
    const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
      closest(<Element>args.target, '.e-row').getAttribute('data-uid')
    );
    this.routingApi.deleteRoutingById(rowObj.data['id']).subscribe(
      () => this.notification.showMessage('Route Deleted'),
      (error: CustomErrorResponse) => {
        this.notification.showMessage('Unable to Delete Route', 'error');
        this.handleError(error);
      }
    );
  }

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id && this.itemId) {
      this.route.navigate([`routings/new/${this.itemId}`]);
    }
  } */
}
