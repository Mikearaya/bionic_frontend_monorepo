import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseTermApiService } from './purchase-term-api.service';
import { PurchaseTermApiOptionsService } from './purchase-term-api-options.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  PurchaseTermModuleOptions
>('forRoot() Purchase Recieving configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PurchaseTermApiService]
})
export class PurchaseTermApiModule {
  static forRoot(options?: PurchaseTermModuleOptions): ModuleWithProviders {
    return {
      ngModule: PurchaseTermApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: PurchaseTermApiOptionsService,
          useFactory: providePurchaseTermModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface PurchaseTermModuleOptions {
  apiUrl?: string;
}

export function providePurchaseTermModuleOptions(
  options?: PurchaseTermModuleOptions
): PurchaseTermApiOptionsService {
  const purchaseRecievingOptions = new PurchaseTermApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
