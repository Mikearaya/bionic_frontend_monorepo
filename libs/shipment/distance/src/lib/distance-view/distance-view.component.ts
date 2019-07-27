import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { DistanceApiService } from '@bionic/apis/shipment/distance-api';

@Component({
  selector: 'bionic-distance-view',
  templateUrl: './distance-view.component.html',
  styleUrls: ['./distance-view.component.css']
})
export class DistanceViewComponent implements OnInit {
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
      key: 'From',
      header: 'From',
      visible: true,
      type: 'string'
    },
    {
      key: 'To',
      header: 'To',
      visible: true,
      type: 'string'
    },
    {
      key: 'Distance',
      header: 'Distance',
      visible: true,
      width: 100,
      type: 'number',
      format: 'N2'
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

  constructor(private distanceApi: DistanceApiService) {
    this.data = this.distanceApi;
    this.distanceApi.execute(new QueryString());
  }

  ngOnInit() {
    this.distanceApi.execute(new QueryString());
  }

  deleteDistance(data: any) {
    this.distanceApi
      .deleteDistance(data['Id'])
      .subscribe(() => alert('Distance delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.distanceApi.execute(state);
  }
}
