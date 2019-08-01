import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SystemUserViewModel } from './models/system-user-view.model';
import { SystemUserModel } from './models/system-user.model';
import { PasswordChangeModel } from './models/password-change.model';
import { UserIndexModel } from './models/user-index.model';
import { QueryString } from '@bionic/components/data-grid';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { DataResult } from '@syncfusion/ej2-data';
import { map } from 'rxjs/operators';

@Injectable()
export class SystemUserApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api`;
  private controller = 'system-users';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getUserById(userId: string): Observable<SystemUserViewModel> {
    return this.httpClient.get<SystemUserViewModel>(
      `${this.apiUrl}/${this.controller}/${userId}`
    );
  }

  getAllUsers(): Observable<SystemUserViewModel[]> {
    return this.httpClient.get<SystemUserViewModel[]>(
      `${this.apiUrl}/${this.controller}`
    );
  }

  createUser(newUser: SystemUserModel): Observable<SystemUserViewModel> {
    return this.httpClient.post<SystemUserViewModel>(
      `${this.apiUrl}/${this.controller}`,
      newUser
    );
  }

  getUsersIndex(searchString: string = ''): Observable<UserIndexModel[]> {
    return this.httpClient.get<UserIndexModel[]>(
      `${this.apiUrl}/${this.controller}/index?searchString=${searchString}`
    );
  }

  updateUser(updatedUser: SystemUserModel): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${updatedUser.Id}`,
      updatedUser
    );
  }

  deleteUser(userId: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/${this.controller}/${userId}`
    );
  }

  updateUserPassword(user: PasswordChangeModel): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${this.controller}/${user.id}/password`,
      user
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
