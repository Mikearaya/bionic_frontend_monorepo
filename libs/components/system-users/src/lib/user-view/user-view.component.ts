import { Component, OnInit } from '@angular/core';
import {
  SystemUserViewModel,
  SystemUserApiService
} from '@bionic/apis/common/system-users-api';
import { userColumnBluePrint } from './user-view-column.model';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { QueryString } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  public data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint = userColumnBluePrint;
  public customAttributes: { class: string };
  public filterOptions: { type: string };

  constructor(private userApi: SystemUserApiService) {
    this.data = this.userApi;
    this.userApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.userApi.execute(new QueryString());
  }

  deleteUser(data: any) {
    this.userApi
      .deleteUser(data['Id'])
      .subscribe(() => alert('User delete successfuly'));
  }

  onDataStateChanged(state: QueryString): void {
    this.userApi.execute(state);
  }
}
