import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderApiOptionsService } from './purchase-order-api-options.service';
import { PurchaseOrderApiService } from './purchase-order-api.service';
import { HttpClientModule } from '@angular/common/http';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  PurchaseOrderModuleOptions
>('forRoot() Purchase Order configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PurchaseOrderApiService]
})
export class PurchaseOrderApiModule {
  static forRoot(options?: PurchaseOrderModuleOptions): ModuleWithProviders {
    return {
      ngModule: PurchaseOrderApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: PurchaseOrderApiOptionsService,
          useFactory: providePurchaseOrderModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface PurchaseOrderModuleOptions {
  apiUrl?: string;
}

export function providePurchaseOrderModuleOptions(
  options?: PurchaseOrderModuleOptions
): PurchaseOrderApiOptionsService {
  const purchaseRecievingOptions = new PurchaseOrderApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
