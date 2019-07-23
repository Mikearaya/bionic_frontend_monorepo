import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { LocationApiService } from '@bionic/apis/shipment/location-api';
import { QueryString, CustomGridColumns } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {
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
      key: 'LocationName',
      header: 'Name',
      visible: true,
      type: 'string'
    },
    {
      key: 'Country',
      header: 'Country',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'IsLocal',
      header: 'Domestic',
      visible: true,
      width: 50,
      type: 'boolean'
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

  constructor(private locationApi: LocationApiService) {
    this.data = this.locationApi;
    this.locationApi.execute(new QueryString());
  }

  ngOnInit() {
    this.locationApi.execute(new QueryString());
  }

  deleteLocations(data: any) {
    this.locationApi
      .deleteLocation(data['Id'])
      .subscribe(() => alert('Location delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.locationApi.execute(state);
  }
}
