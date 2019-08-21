import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderPaymentsApiOptionsService } from './purchase-order-payments-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseOrderPaymentsApiService } from './purchase-order-payments-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  PurchaseOrderPaymentModuleOptions
>('forRoot() Purchase Order Payments configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PurchaseOrderPaymentsApiService]
})
export class PurchaseOrderPaymentApiModule {
  static forRoot(
    options?: PurchaseOrderPaymentModuleOptions
  ): ModuleWithProviders {
    return {
      ngModule: PurchaseOrderPaymentApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: PurchaseOrderPaymentsApiOptionsService,
          useFactory: providePurchaseOrderPaymentModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface PurchaseOrderPaymentModuleOptions {
  apiUrl?: string;
}

export function providePurchaseOrderPaymentModuleOptions(
  options?: PurchaseOrderPaymentModuleOptions
): PurchaseOrderPaymentsApiOptionsService {
  const purchaseRecievingOptions = new PurchaseOrderPaymentsApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
