import { Injectable } from '@angular/core';
import { AuthorizationModel } from './models/authorization.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationApiService {
  securityObject: AuthorizationModel;

  constructor() {
    this.securityObject = JSON.parse(localStorage.getItem('bionicBearerToken'));

    if (!this.securityObject) {
      this.securityObject = new AuthorizationModel();
    }
  }

  hasClaim(claimType: any, claimValue?: any): boolean {
    let ret = false;
    if (typeof claimType === 'string') {
      ret = this.isClaimValid(claimType, claimValue);
    } else {
      const claims: string[] = claimType;

      if (claims) {
        for (let index = 0; index < claims.length; index++) {
          ret = this.isClaimValid(claims[index]);

          if (ret) {
            break;
          }
        }
      }
    }

    return ret;
  }

  private isClaimValid(claimType: string, claimValue?: string): boolean {
    let ret = false;
    let auth: AuthorizationModel;

    auth = this.securityObject;

    if (auth) {
      if (claimType.indexOf(':') >= 0) {
        const words: string[] = claimType.split(':');
        claimType = words[0].toLocaleLowerCase();
        claimValue = words[1];
      } else {
        claimType = claimType.toLocaleLowerCase();
        claimValue = claimValue ? claimValue : 'true';
      }

      ret =
        auth.Claims.find(
          c =>
            c.ClaimType.toLocaleLowerCase() === claimType &&
            c.ClaimValue === claimValue
        ) != null;
    }

    return ret;
  }

  setUserPrivilage(privilage: AuthorizationModel) {
    this.securityObject = privilage;
    localStorage.setItem('bionicBearerToken', JSON.stringify(privilage));
  }

  resetUserPrivilage(): void {
    this.securityObject.UserName = '';
    this.securityObject.BearerToken = '';
    this.securityObject.Claims = [];
    this.securityObject.IsAuthenticated = false;

    localStorage.removeItem('bionicBearerToken');
  }
}
