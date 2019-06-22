import { Component, OnInit } from '@angular/core';
import { DataSourceChangedEventArgs } from '@syncfusion/ej2-navigations';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { VehiclesApiService } from '@bionic/apis/rent/vehicles-api';
import { Subject } from 'rxjs';
import { CustomGridColumns } from 'libs/components/data-grid/src/lib/data-view/data-view.component';
import { QueryString } from 'libs/components/data-grid/src/lib/data-view/data-view.model';

@Component({
  selector: 'bionic-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css']
})
export class VehicleViewComponent implements OnInit {
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
      key: 'Make',
      header: 'Make',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'Model',
      header: 'Model',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'YearMade',
      header: 'Year',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'Color',
      header: 'Overflow Id',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'Type',
      header: 'Type',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'Owner',
      header: 'Owner',
      visible: true,
      width: 100,
      type: 'string'
    },

    {
      key: 'PlateCode',
      header: 'Code',
      visible: true,
      width: 70,
      type: 'string'
    },
    {
      key: 'PlateNumber',
      header: 'Plate Number',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'ChassisNumber',
      header: 'Chassis',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'MotorNumber',
      header: 'MotorNo',
      visible: false,
      width: 100,
      type: 'string'
    }
  ];
  constructor(private vehicleApi: VehiclesApiService) {
    this.data = this.vehicleApi;
    this.vehicleApi.execute(new QueryString());
  }

  ngOnInit() {
    this.vehicleApi.execute(new QueryString());
  }
  onDataStateChange(state: QueryString): void {
    this.vehicleApi.execute(state);
  }

  deleteVehicle(data: any) {
    this.vehicleApi.deleteVehicle(data['Id']).subscribe(
      () => {},
      () => {
        alert("Can not delete Vehicle because it's been used in a transaction");
      }
    );
  }
}
