import { Injectable } from '@angular/core';
import { NavigationOptionsService } from './navigation-options.service';
import { DefaultLayoutModel } from './models/default-layout.model';

@Injectable()
export class LayoutOptionsService {
  NAVIGATION_LINKS: DefaultLayoutModel[] = [];
  constructor(private navigationOptions: NavigationOptionsService) {
    this.NAVIGATION_LINKS = this.navigationOptions.ROUTES;
  }
}
