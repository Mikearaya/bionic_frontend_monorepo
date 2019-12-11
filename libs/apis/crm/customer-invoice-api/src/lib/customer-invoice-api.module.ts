import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInvoiceApiService } from './customer-invoice-api.service';
import { CustomerInvoiceApiOptionService } from './customer-invoice-api-option.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<CustomerModuleOptions>(
  'forRoot()  Customer Api configuration.'
);

@NgModule({
  imports: [CommonModule]
})
export class CustomerInvoiceApiModule {
  static forRoot(options?: CustomerModuleOptions): ModuleWithProviders {
    return {
      ngModule: CustomerInvoiceApiService,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: CustomerInvoiceApiOptionService,
          useFactory: provideCustomerModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface CustomerModuleOptions {
  apiUrl?: string;
}

export function provideCustomerModuleOptions(
  options?: CustomerModuleOptions
): CustomerInvoiceApiOptionService {
  const customerApiOptions = new CustomerInvoiceApiOptionService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      customerApiOptions.apiUrl = options.apiUrl;
    }
  }

  return customerApiOptions;
}
