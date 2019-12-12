import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInvoicePaymentApiOptionsService } from './customer-invoice-payment-api-options.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  CustomerInvoicePaymentModuleOptions
>('forRoot()  Customer Order Api configuration.');
@NgModule({
  imports: [CommonModule]
})
export class CustomerInvoicePaymentApiModule {
  static forRoot(
    options?: CustomerInvoicePaymentModuleOptions
  ): ModuleWithProviders {
    return {
      ngModule: CustomerInvoicePaymentApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: CustomerInvoicePaymentApiOptionsService,
          useFactory: provideCustomerInvoicePaymentModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface CustomerInvoicePaymentModuleOptions {
  apiUrl?: string;
}

export function provideCustomerInvoicePaymentModuleOptions(
  options?: CustomerInvoicePaymentModuleOptions
): CustomerInvoicePaymentApiOptionsService {
  const customerApiOptions = new CustomerInvoicePaymentApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      customerApiOptions.apiUrl = options.apiUrl;
    }
  }

  return customerApiOptions;
}
