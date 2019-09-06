import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { SystemUserApiService } from '@bionic/apis/common/system-users-api';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';

@Component({
  template: `
    <bionic-data-view
      [data]="data"
      (deleteRecord)="deleteUser($event)"
      [showAdd]="true"
      [enableSorting]="true"
      [showUpdate]="true"
      [showDelete]="true"
      [addPrivilage]="'canAddUsers'"
      [updatePrivilage]="'canEditUsers'"
      [deletePrivilage]="'canDeleteUsers'"
      (dataStateChaged)="onDataStateChanged($event)"
      [columnsList]="columnBluePrint"
    ></bionic-data-view>
  `,
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  columnBluePrint: CustomGridColumns[] = [
    { key: 'Id', header: 'ID', visible: false, type: 'string', width: 40 },
    { key: 'UserName', header: 'Username', visible: true, type: 'string' },
    {
      key: 'PhoneNumber',
      header: 'Phonenumber',
      visible: true,
      type: 'string',
      width: 100
    },
    {
      key: 'Email',
      header: 'E-mail',
      visible: true,
      type: 'string',
      width: 100
    },
    {
      key: 'Role',
      header: 'Role',
      visible: true,
      type: 'string',
      width: 100
    }
  ];
  public data: Subject<DataStateChangeEventArgs>;

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
