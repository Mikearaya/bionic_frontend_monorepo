import { ActivatedRoute, Router } from '@angular/router';
import {
  GridComponent,
  DataStateChangeEventArgs
} from '@syncfusion/ej2-angular-grids';
import { Component, OnInit, ViewChild } from '@angular/core';
import { systemRoleColumnBluePrint } from './system-role-view-column.model';
import {
  RoleViewModel,
  SystemRoleApiService
} from '@bionic/apis/common/system-roles-api';
import { Subject } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-system-role-view',
  templateUrl: './system-role-view.component.html',
  styleUrls: ['./system-role-view.component.css']
})
export class SystemRoleViewComponent implements OnInit {
  public data: Subject<DataStateChangeEventArgs>;
  public columnBluePrint = systemRoleColumnBluePrint;

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
