import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthorizationApiService } from './authorization-api.service';

@Directive({
  selector: '[bionicHasClaim]'
})
export class HasClaimDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewCotainer: ViewContainerRef,
    private authorizationApi: AuthorizationApiService
  ) {}

  @Input()
  set hasClaim(claimType: any) {
    if (this.authorizationApi.hasClaim(claimType)) {
      this.viewCotainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewCotainer.clear();
    }
  }
}
