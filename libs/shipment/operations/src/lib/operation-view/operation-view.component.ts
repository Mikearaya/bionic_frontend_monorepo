import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { OperationsApiService } from '@bionic/apis/shipment/operations-api';

@Component({
  selector: 'bionic-operation-view',
  templateUrl: './operation-view.component.html',
  styleUrls: ['./operation-view.component.css']
})
export class OperationViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'Id',
      visible: true,
      width: 40,
      type: 'number'
    },
    {
      key: 'CustomerName',
      header: 'Customer',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'DriverName',
      header: 'Driver',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'StartPoint',
      header: 'Start',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'Destination',
      header: 'Destination',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'ScheduledDepature',
      header: 'Scheduled Departure',
      visible: true,
      width: 100,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'ScheduledArrival',
      header: 'ScheduledArrival',
      visible: true,
      width: 100,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'DepatureDate',
      header: ' Departure',
      visible: true,
      width: 100,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'ArrivalDate',
      header: 'Arrival',
      visible: true,
      width: 100,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'CargoType',
      header: 'Cargo Type',
      visible: true,
      width: 100,
      type: 'number'
    },
    {
      key: 'CargoWeight',
      header: 'Weight',
      visible: true,
      width: 100,
      type: 'number'
    },
    {
      key: 'DateAdded',
      header: 'Added',
      visible: false,
      width: 100,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 100,
      type: 'date',
      format: 'yMd'
    }
  ];

  constructor(private ooperationApi: OperationsApiService) {
    this.data = this.ooperationApi;
    this.ooperationApi.execute(new QueryString());
  }

  ngOnInit() {
    this.ooperationApi.execute(new QueryString());
  }

  deleteOperations(data: any) {
    this.ooperationApi
      .deleteOperation(data['Id'])
      .subscribe(() => alert('Operation delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.ooperationApi.execute(state);
  }
}
