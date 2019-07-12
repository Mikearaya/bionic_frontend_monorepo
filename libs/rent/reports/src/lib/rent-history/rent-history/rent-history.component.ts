import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { RentHistoryApiService } from '@bionic/apis/rent/reports-api';

@Component({
  selector: 'bionic-rent-history',
  templateUrl: './rent-history.component.html',
  styleUrls: ['./rent-history.component.css']
})
export class RentHistoryComponent implements OnInit {
  constructor(private rentHistoryApi: RentHistoryApiService) {
    this.data = this.rentHistoryApi;
    this.rentHistoryApi.execute(new QueryString());
  }
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
      header: 'Customer Name',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'StartDate',
      header: 'Start',
      visible: true,
      format: 'dYm',
      type: 'date',
      width: 150
    },
    {
      key: 'EndDate',
      header: 'End',
      visible: true,
      format: 'dYm',
      type: 'datetime',
      width: 150
    },
    {
      key: 'Duration',
      header: 'Days',
      visible: true,
      format: 'C2',
      type: 'number',
      width: 150
    },
    {
      key: 'Status',
      header: 'Status',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'PaymentStatus',
      header: 'Payment Status',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'VehicleMake',
      header: 'Vehicle',
      visible: false,
      type: 'string',
      width: 150
    },
    {
      key: 'VehiclePlateNo',
      header: 'Plate No.',
      visible: false,
      type: 'string',
      width: 150
    },
    {
      key: 'RentedPrice',
      header: 'Rent Amount',
      visible: false,
      format: 'C2',
      type: 'number',
      width: 150
    },
    {
      key: 'PaidAmount',
      header: 'Paid',
      visible: false,
      format: 'C2',
      type: 'number',
      width: 150
    }
  ];
  onDataStateChange(query: QueryString): void {
    this.rentHistoryApi.execute(query);
  }

  ngOnInit() {
    this.rentHistoryApi.execute(new QueryString());
  }
}
