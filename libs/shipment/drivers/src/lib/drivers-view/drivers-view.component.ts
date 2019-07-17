import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { DriversApiService } from '@bionic/apis/shipment/drivers-api';

@Component({
  selector: 'bionic-drivers-view',
  templateUrl: './drivers-view.component.html',
  styleUrls: ['./drivers-view.component.css']
})
export class DriversViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'FullName',
      header: 'FullName',
      visible: true,
      type: 'string'
    },
    {
      key: 'DrivingLicenseId',
      header: 'Drivinc License',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'DateAdded',
      header: 'Added',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    }
  ];

  constructor(private driversApi: DriversApiService) {
    this.data = this.driversApi;
    this.driversApi.execute(new QueryString());
  }

  ngOnInit() {
    this.driversApi.execute(new QueryString());
  }

  deleteDriver(data: any) {
    this.driversApi
      .deleteDriver(data['Id'])
      .subscribe(() => alert('Driver delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.driversApi.execute(state);
  }
}
