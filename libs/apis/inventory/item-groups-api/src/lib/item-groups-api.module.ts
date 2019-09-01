import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemGroupsApiOptionsService } from './item-groups-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemGroupsApiService } from './item-groups-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ItemGroupModuleOptions>(
  'forRoot() Item Group Api configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ItemGroupsApiService]
})
export class ItemGroupsApiModule {
  static forRoot(options?: ItemGroupModuleOptions): ModuleWithProviders {
    return {
      ngModule: ItemGroupsApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: ItemGroupsApiOptionsService,
          useFactory: provideItemGroupModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface ItemGroupModuleOptions {
  apiUrl?: string;
}

export function provideItemGroupModuleOptions(
  options?: ItemGroupModuleOptions
): ItemGroupsApiOptionsService {
  const purchaseRecievingOptions = new ItemGroupsApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
