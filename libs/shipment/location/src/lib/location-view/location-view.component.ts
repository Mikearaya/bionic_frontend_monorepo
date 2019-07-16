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
      key: 'Name',
      header: 'Name',
      visible: true,
      type: 'string'
    },
    {
      key: 'Province',
      header: 'Province',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'IsDomestic',
      header: 'Domestic',
      visible: true,
      width: 50,
      type: 'boolean'
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
