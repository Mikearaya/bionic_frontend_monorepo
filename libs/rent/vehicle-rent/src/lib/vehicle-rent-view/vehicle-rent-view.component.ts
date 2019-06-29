import { Component, OnInit } from '@angular/core';
import { VehiclesApiService } from '@bionic/apis/rent/vehicles-api';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { RentsApiService } from '@bionic/apis/rent/rents-api';

@Component({
  selector: 'bionic-vehicle-rent-view',
  templateUrl: './vehicle-rent-view.component.html',
  styleUrls: ['./vehicle-rent-view.component.css']
})
export class VehicleRentViewComponent implements OnInit {
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
      key: 'CustomerName',
      header: 'Customer Name',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'Vehicle',
      header: 'Vehicle',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'StartDate',
      header: 'Start',
      visible: true,
      width: 100,
      type: 'datetime',
      format: 'dYm'
    },
    {
      key: 'ReturnDate',
      header: 'Return Date',
      visible: true,
      width: 100,
      type: 'datetime',
      format: 'dYm'
    },
    {
      key: 'Status',
      header: 'Status',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'DateAdded',
      header: 'Added',
      visible: false,
      width: 100,
      format: 'dYm',
      type: 'datetime'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 100,
      format: 'dYm',
      type: 'datetime'
    }
  ];

  constructor(private rentApi: RentsApiService) {
    this.data = this.rentApi;
    this.rentApi.execute(new QueryString());
  }

  ngOnInit() {
    this.rentApi.execute(new QueryString());
  }
  onDataStateChange(state: QueryString): void {
    this.rentApi.execute(state);
  }

  deleteRent(data: any) {
    this.rentApi.deleteRent(data['Id']).subscribe(
      () => {},
      () => {
        alert("Can not delete rent because it's been used in a transaction");
      }
    );
  }
}
