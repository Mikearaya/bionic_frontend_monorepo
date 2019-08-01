import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { SystemRoleApiService } from '@bionic/apis/common/system-roles-api';

@Component({
  selector: 'bionic-role-view',
  template: `
    <bionic-data-view
      [data]="data"
      (deleteRecord)="deleteRole($event)"
      [showAdd]="true"
      [showUpdate]="true"
      [showDelete]="true"
      [enableSorting]="true"
      [addPrivilage]="'canAddRoles'"
      [updatePrivilage]="'canEditRoles'"
      [deletePrivilage]="'canDeleteRoles'"
      (dataStateChaged)="onDataStateChanged($event)"
      [columnsList]="columnBluePrint"
    ></bionic-data-view>
  `,
  styleUrls: ['./role-view.component.css']
})
export class RoleViewComponent implements OnInit {
  public data: Subject<DataStateChangeEventArgs>;
  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'ID',
      visible: false,
      type: 'string',
      width: 40
    },
    {
      key: 'Name',
      header: 'Role Name',
      visible: true,
      type: 'string'
    }
  ];
  constructor(private roleApi: SystemRoleApiService) {
    this.data = this.roleApi;
    this.roleApi.execute(new QueryString());
  }

  ngOnInit(): void {
    this.roleApi.execute(new QueryString());
  }

  deleteRole(data: any) {
    this.roleApi
      .deleteSystemRole(data['Id'])
      .subscribe(() => alert('Role delete successfuly'));
  }

  onDataStateChanged(state: QueryString): void {
    this.roleApi.execute(state);
  }
}
