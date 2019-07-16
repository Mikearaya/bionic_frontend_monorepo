import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationApiService } from './authorization-api.service';

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanLoad {
  constructor(
    private router: Router,
    private authorizationApi: AuthorizationApiService
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    const claimType: string = route.data['claimType'];

    if (
      this.authorizationApi.securityObject.IsAuthenticated &&
      this.authorizationApi.hasClaim(claimType)
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
