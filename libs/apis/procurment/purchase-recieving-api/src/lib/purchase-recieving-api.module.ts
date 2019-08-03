import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRecievingApiOptionsService } from './purchase-recieving-api-options.service';
import { PurchaseRecievingApiService } from './purchase-recieving-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  PurchaseRecievingModuleOptions
>('forRoot() Purchase Recieving configuration.');

@NgModule({
  imports: [CommonModule],
  providers: [PurchaseRecievingApiService]
})
export class PurchaseRecievingApiModule {
  static forRoot(
    options?: PurchaseRecievingModuleOptions
  ): ModuleWithProviders {
    return {
      ngModule: PurchaseRecievingApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: PurchaseRecievingApiOptionsService,
          useFactory: providePurchaseRecievingModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface PurchaseRecievingModuleOptions {
  apiUrl?: string;
}

export function providePurchaseRecievingModuleOptions(
  options?: PurchaseRecievingModuleOptions
): PurchaseRecievingApiOptionsService {
  const purchaseRecievingOptions = new PurchaseRecievingApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
