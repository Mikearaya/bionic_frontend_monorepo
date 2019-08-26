import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { PageInformationsModule } from '@bionic/components/page-informations';
import {
  SidebarModule,
  TreeViewAllModule
} from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccessControlApiModule } from '@bionic/apis/common/access-control-api';
import { RouterModule } from '@angular/router';
import { NavigationOptionsService } from './navigation-options.service';
import { LayoutOptionsService } from './layout-options.service';
import { DefaultLayoutModel } from './models/default-layout.model';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  DefaultLayoutModuleOptions
>('forRoot() Default Navigation configuration.');

@NgModule({
  imports: [
    CommonModule,
    PageInformationsModule,
    RouterModule,
    AccessControlApiModule,
    SidebarModule,
    TreeViewAllModule,
    ButtonModule
  ],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent],
  providers: [LayoutOptionsService]
})
export class DefaultLayoutModule {
  static forRoot(options?: DefaultLayoutModuleOptions): ModuleWithProviders {
    return {
      ngModule: DefaultLayoutModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: NavigationOptionsService,
          useFactory: provideDefaultLayoutModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface DefaultLayoutModuleOptions {
  ROUTES?: DefaultLayoutModel[];
}

export function provideDefaultLayoutModuleOptions(
  options?: DefaultLayoutModuleOptions
): NavigationOptionsService {
  const navigationOptions = new NavigationOptionsService();
  if (options) {
    if (options.ROUTES) {
      navigationOptions.ROUTES = options.ROUTES;
    }
  }

  return navigationOptions;
}
