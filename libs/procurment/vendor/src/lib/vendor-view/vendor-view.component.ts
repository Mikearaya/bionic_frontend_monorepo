import { DataSourceChangedEventArgs } from '@syncfusion/ej2-navigations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { vendorColumnBluePrint } from './vendor-view-column.model';
import { Subject } from 'rxjs';
import { NotificationComponent } from '@bionic/components/notification';
import { VendorApiService } from '@bionic/apis/procurment/vendor-api';
import { QueryString } from '@bionic/components/data-grid';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;

  public data: Subject<DataSourceChangedEventArgs>;

  public columnBluePrint = vendorColumnBluePrint;

  constructor(private vendorApi: VendorApiService) {
    this.vendorApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.vendorApi.execute(new QueryString());
  }

  deleteVendor(data: any): void {
    this.vendorApi.deleteVendor(data['Id']).subscribe(
      () => this.notification.showMessage('Vendor Deleted'),
      (error: HttpErrorResponse) => {
        this.notification.showMessage('Unable to Delete Vendor', 'error');
      }
    );
  }

  onDataStateChange(state: QueryString): void {
    this.vendorApi.execute(state);
  }
}
