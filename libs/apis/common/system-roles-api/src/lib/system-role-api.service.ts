import { Injectable, Inject } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoleViewModel } from './models/system-role-view.model';
import { SystemRoleModel } from './models/system-role.model';
import { SystemRoleIndexModel } from './models/system-role-index.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { map } from 'rxjs/operators';
import { SystemsRoles } from './models/role.model';
import { RoleOptionsService } from './role-options.service';

@Injectable({
  providedIn: 'root'
})
export class SystemRoleApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/system-roles`;
  Roles: SystemsRoles[] = [];

  constructor(
    private httpClient: HttpClient,
    private roleOptions: RoleOptionsService
  ) {
    super();
    this.Roles = roleOptions.ROLES;
  }

  getSystemRoleById(roleId: string): Observable<SystemRoleModel> {
    return this.httpClient.get<SystemRoleModel>(`${this.apiUrl}/${roleId}`);
  }

  getAllSystemRoles(): Observable<RoleViewModel[]> {
    return this.httpClient.get<RoleViewModel[]>(`${this.apiUrl}`);
  }

  getSystemRolesIndex(
    searchString: string = ''
  ): Observable<SystemRoleIndexModel[]> {
    return this.httpClient.get<SystemRoleIndexModel[]>(
      `${this.apiUrl}/index?searchString=${searchString}`
    );
  }

  createSystemRole(newRole: SystemRoleModel): Observable<SystemRoleModel> {
    return this.httpClient.post<SystemRoleModel>(`${this.apiUrl}`, newRole);
  }

  updateSystemRole(updatedRole: SystemRoleModel): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${updatedRole.Id}`,
      updatedRole
    );
  }

  deleteSystemRole(roleId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${roleId}`);
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/filter`, state)
      .pipe(
        map(
          (response: any) =>
            ({
              result: response['Items'],
              count: parseInt(response['Count'], 10)
            } as DataResult)
        )
      )
      .pipe((data: any) => data);
  }
}
