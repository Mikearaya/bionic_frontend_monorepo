import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { storageLocationColumnBluePrint } from './storage-location-view.model';
import { NotificationComponent } from '@bionic/components/notification';
import { StorageLocationsApiService } from '@bionic/apis/inventory/storage-locations-api';
import { Subject } from 'rxjs';
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
      [addPrivilage]="'canAddStorageLocations'"
      [updatePrivilage]="'canEditStorageLocations'"
      [deletePrivilage]="'canDeleteStorageLocations'"
      (deleteRecord)="deleteStorageLocation($event)"
      [showPdfExport]="true"
      [showPrint]="true"
      [columnsList]="columnBluePrint"
      (dataStateChaged)="onDataStateChange($event)"
      [enableSearching]="true"
      [showColumnChooser]="true"
    ></bionic-data-view>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./storage-location-view.component.css']
})
export class StorageLocationViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = storageLocationColumnBluePrint;

  constructor(private storageLocationApi: StorageLocationsApiService) {
    this.data = this.storageLocationApi;
    this.storageLocationApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.storageLocationApi.execute(new QueryString());
  }

  deleteStorageLocation(data: any): void {
    this.storageLocationApi.deleteStorageLocation(data['Id']).subscribe(
      () => this.notification.showMessage('Storage Location Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage(
          'Unable to Delete Storage Location',
          'error'
        );
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.storageLocationApi.execute(state);
  }
}
