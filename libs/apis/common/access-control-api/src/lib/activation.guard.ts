import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationApiService } from './authorization-api.service';

@Injectable({
  providedIn: 'root'
})
export class ActivationGuard implements CanActivate {
  constructor(
    private authorizationApi: AuthorizationApiService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const claimType = next.data['claimType'];

    if (this.authorizationApi.hasClaim(claimType)) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
