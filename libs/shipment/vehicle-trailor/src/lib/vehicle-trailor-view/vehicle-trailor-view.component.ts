import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { VehicleTrailorApiService } from '@bionic/apis/shipment/vehicle-trailor-api';

@Component({
  selector: 'bionic-vehicle-trailor-view',
  templateUrl: './vehicle-trailor-view.component.html',
  styleUrls: ['./vehicle-trailor-view.component.css']
})
export class VehicleTrailorViewComponent implements OnInit {
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
      type: 'string'
    },
    {
      key: 'PlateNumber',
      header: 'Plate Number',
      visible: true,
      width: 150,
      type: 'string'
    },
    {
      key: 'Color',
      header: 'Color',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'YearMade',
      header: 'Year',
      visible: true,
      width: 50,
      type: 'string'
    },
    {
      key: 'YearMade',
      header: 'Year',
      visible: true,
      width: 50,
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

  constructor(private trailorApi: VehicleTrailorApiService) {
    this.data = this.trailorApi;
    this.trailorApi.execute(new QueryString());
  }

  ngOnInit() {
    this.trailorApi.execute(new QueryString());
  }

  deleteTrailor(data: any) {
    this.trailorApi
      .deleteVehicleTrailor(data['Id'])
      .subscribe(() => alert('Trailor delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.trailorApi.execute(state);
  }
}
