import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  AuthorizationApiService,
  AuthenticationApiService
} from '@bionic/apis/common/access-control-api';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authorizationApi: AuthenticationApiService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authorizationApi.securityObject.IsAuthenticated) {
      return true;
    } else {
      return true;
      //  this.router.navigate(['login']);
    }
  }
}
