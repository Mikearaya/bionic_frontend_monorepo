import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthorizationApiService } from './authorization-api.service';
import { AuthorizationModel } from './models/authorization.model';
import { Observable, of } from 'rxjs';
import { AuthenticationModel } from './models/authentication.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationApiService {
  securityObject: AuthorizationModel;

  constructor(
    private httpClient: HttpClient,
    private authorizationApi: AuthorizationApiService
  ) {
    this.securityObject = new AuthorizationModel();
  }

  logIn(loginData: AuthenticationModel): Observable<boolean> {
    return this.httpClient
      .post<AuthorizationModel>(
        `http://localhost:5000/security/login`,
        loginData
      )
      .pipe(
        map((data: AuthorizationModel) => {
          this.authorizationApi.setUserPrivilage(data);
          return true;
        })
      );
  }

  logOut() {
    this.authorizationApi.resetUserPrivilage();
    window.location.href = `http://${window.location.hostname}:4200`;
  }
}
