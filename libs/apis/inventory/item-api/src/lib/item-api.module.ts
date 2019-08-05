import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemApiOptionsService } from './item-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemApiService } from './item-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ItemModuleOptions>(
  'forRoot() Item Api configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ItemApiService]
})
export class ItemApiModule {
  static forRoot(options?: ItemModuleOptions): ModuleWithProviders {
    return {
      ngModule: ItemApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: ItemApiOptionsService,
          useFactory: provideItemModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface ItemModuleOptions {
  apiUrl?: string;
}

export function provideItemModuleOptions(
  options?: ItemModuleOptions
): ItemApiOptionsService {
  const purchaseRecievingOptions = new ItemApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
