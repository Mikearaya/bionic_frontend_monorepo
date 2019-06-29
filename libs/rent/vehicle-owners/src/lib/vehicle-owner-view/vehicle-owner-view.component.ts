import { Component, OnInit } from '@angular/core';
import { VehicleOwnersApiService } from '@bionic/apis/rent/vehicle-owners-api';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-vehicle-owner-view',
  templateUrl: './vehicle-owner-view.component.html',
  styleUrls: ['./vehicle-owner-view.component.css']
})
export class VehicleOwnerViewComponent implements OnInit {
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
      key: 'PartnerName',
      header: 'Customer Name',
      visible: true,
      type: 'string'
    },
    {
      key: 'MobileNumber',
      header: 'Main Phone',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'City',
      header: 'City',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'SubCity',
      header: 'Sub-city',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'Wereda',
      header: 'Wereda',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'HouseNumber',
      header: 'House No.',
      visible: false,
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

  constructor(private vehicleOwnerApi: VehicleOwnersApiService) {
    this.data = this.vehicleOwnerApi;
    this.vehicleOwnerApi.execute(new QueryString());
  }

  ngOnInit() {
    this.vehicleOwnerApi.execute(new QueryString());
  }

  onDataStateChange(state: QueryString): void {
    this.vehicleOwnerApi.execute(state);
  }

  deleteVehicleOwner(data: any) {
    this.vehicleOwnerApi.deleteVehicleOwner(data['Id']).subscribe(
      () => {},
      () => {
        alert("Can not delete partner because it's been used in a transaction");
      }
    );
  }
}
