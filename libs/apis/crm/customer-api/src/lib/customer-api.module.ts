import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerApiOptionsService } from './customer-api-options.service';
import { CustomerApiService } from './customer-api.service';
import { HttpClientModule } from '@angular/common/http';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<CustomerModuleOptions>(
  'forRoot()  Customer Api configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CustomerApiService]
})
export class CustomerApiModule {
  static forRoot(options?: CustomerModuleOptions): ModuleWithProviders {
    return {
      ngModule: CustomerApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: CustomerApiOptionsService,
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
): CustomerApiOptionsService {
  const customerApiOptions = new CustomerApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      customerApiOptions.apiUrl = options.apiUrl;
    }
  }

  return customerApiOptions;
}
