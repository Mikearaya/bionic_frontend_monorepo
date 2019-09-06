import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrderApiOptionsService } from './customer-order-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerOrderApiService } from './customer-order-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  CustomerOrderModuleOptions
>('forRoot()  Customer Order Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CustomerOrderApiService]
})
export class CustomerOrderApiModule {
  static forRoot(options?: CustomerOrderModuleOptions): ModuleWithProviders {
    return {
      ngModule: CustomerOrderApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: CustomerOrderApiOptionsService,
          useFactory: provideCustomerOrderModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface CustomerOrderModuleOptions {
  apiUrl?: string;
}

export function provideCustomerOrderModuleOptions(
  options?: CustomerOrderModuleOptions
): CustomerOrderApiOptionsService {
  const customerApiOptions = new CustomerOrderApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      customerApiOptions.apiUrl = options.apiUrl;
    }
  }

  return customerApiOptions;
}
