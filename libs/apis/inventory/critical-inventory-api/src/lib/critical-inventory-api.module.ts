import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriticalInventoryApiOptionsService } from './critical-inventory-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { CriticalInventoryApiService } from './critical-inventory-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  CriticalInventoryModuleOptions
>('forRoot() Critical Inventory Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CriticalInventoryApiService]
})
export class CriticalInventoryApiModule {
  static forRoot(
    options?: CriticalInventoryModuleOptions
  ): ModuleWithProviders {
    return {
      ngModule: CriticalInventoryApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: CriticalInventoryApiOptionsService,
          useFactory: provideItemModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface CriticalInventoryModuleOptions {
  apiUrl?: string;
}

export function provideItemModuleOptions(
  options?: CriticalInventoryModuleOptions
): CriticalInventoryApiOptionsService {
  const criticalInventoryOptions = new CriticalInventoryApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      criticalInventoryOptions.apiUrl = options.apiUrl;
    }
  }

  return criticalInventoryOptions;
}
