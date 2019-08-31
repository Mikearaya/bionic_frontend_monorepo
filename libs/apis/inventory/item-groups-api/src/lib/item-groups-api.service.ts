import { Injectable } from '@angular/core';
import { ItemGroupsApiOptionsService } from './item-groups-api-options.service';
import { ItemGroupView } from './models/item-group-view.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemGroup } from './models/item-group.model';

import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { map } from 'rxjs/operators';
import { DataResult } from '@syncfusion/ej2-angular-grids';
import { QueryString } from '@bionic/components/data-grid';
import { ItemGroupIndex } from './models/item-group-index.model';

@Injectable()
export class ItemGroupsApiService extends Subject<DataStateChangeEventArgs> {
  private controller = 'inventory/item-groups';
  private apiUrl = `http://${window.location.hostname}:5000/api`;

  constructor(
    private itemGroupApiOption: ItemGroupsApiOptionsService,
    private httpClient: HttpClient
  ) {
    super();
    this.controller = this.itemGroupApiOption.apiUrl;
  }

  getItemGroupIndex(filter: string = ''): Observable<ItemGroupIndex[]> {
    return this.httpClient.get<ItemGroupIndex[]>(
      `${this.apiUrl}/${this.controller}/index?Name=${filter}`
    );
  }

  getAllItemGroups(): Observable<ItemGroupView[]> {
    return this.httpClient.get<ItemGroupView[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }
  getItemGroupById(groupId: number): Observable<ItemGroupView> {
    return this.httpClient.get<ItemGroupView>(
      `${this.apiUrl}/${this.controller}/${groupId}`
    );
  }

  CreateItemGroup(group: ItemGroup): Observable<ItemGroupView> {
    return this.httpClient.post<ItemGroupView>(
      `${this.apiUrl}/${this.controller}`,
      group
    );
  }

  UpdateItemGroup(group: ItemGroup): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${group.Id}`,
      group
    );
  }

  deleteItemGroup(groupId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${groupId}`
    );
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/${this.controller}/filter`, state)
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
