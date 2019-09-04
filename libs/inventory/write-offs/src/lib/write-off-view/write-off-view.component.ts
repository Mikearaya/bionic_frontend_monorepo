import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '@bionic/components/notification';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { writeOffColumnBluePrint } from './write-off-view-blue-print.model';
import { WriteOffsApiService } from '@bionic/apis/inventory/write-offs-api';
import { QueryString } from '@bionic/components/data-grid';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      [showAdd]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [addPrivilage]="'canAddWriteOffs'"
      [updatePrivilage]="'canEditWriteOffs'"
      [deletePrivilage]="'canDeleteWriteOffs'"
      (deleteRecord)="deleteWriteOff($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./write-off-view.component.css']
})
export class WriteOffViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = writeOffColumnBluePrint;

  constructor(private writeOffApi: WriteOffsApiService) {
    this.data = this.writeOffApi;
    this.writeOffApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.writeOffApi.execute(new QueryString());
  }

  deleteWriteOff(data: any): void {
    this.writeOffApi.deleteWriteOff(data['Id']).subscribe(
      () => this.notification.showMessage('Write Off Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Write Off', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.writeOffApi.execute(state);
  }
}
