import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationApiService } from '@bionic/apis/common/access-control-api';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authorizationApi: AuthorizationApiService,
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
    const claimType: string = route.data['claimType'];

    if (this.authorizationApi.securityObject.IsAuthenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
