import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '@bionic/components/notification';
import { QueryString } from '@bionic/components/data-grid';
import { SystemLookupApiService } from '@bionic/apis/common/system-lookup-api';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';

@Component({
  selector: 'bionic-system-lookup-view',
  templateUrl: './system-lookup-view.component.html',
  styleUrls: ['./system-lookup-view.component.css']
})
export class SystemLookupViewComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;
  public data: Subject<DataStateChangeEventArgs>;
  public customAttributes: { class: string };
  public filterOptions: { type: string };
  public columnBluePrint = [
    {
      key: 'Id',
      header: 'Id',
      visible: true,
      width: '40',
      type: 'number'
    },
    {
      key: 'Type',
      header: 'Type',
      visible: true,
      width: '100',
      type: 'string'
    },
    {
      key: 'Value',
      header: 'Value',
      visible: true,
      width: '100',
      type: 'string'
    }
  ];

  constructor(private lookupApi: SystemLookupApiService) {
    this.data = this.lookupApi;
  }
  ngOnInit() {
    this.lookupApi.execute(new QueryString());
  }

  deleteLookup(data: any) {
    this.lookupApi
      .deleteLookup(data['Id'])
      .subscribe(() =>
        this.notification.showMessage('System lookup delete successfuly')
      );
  }

  onDataStateChanged(state: QueryString): void {
    this.lookupApi.execute(state);
  }
}
