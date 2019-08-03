import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorApiOptionsService } from './vendor-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { VendorApiService } from './vendor-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<VendorModuleOptions>(
  'forRoot() UserService configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [VendorApiService]
})
export class VendorApiModule {
  static forRoot(options?: VendorModuleOptions): ModuleWithProviders {
    return {
      ngModule: VendorApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: VendorApiOptionsService,
          useFactory: provideVendorModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface VendorModuleOptions {
  apiUrl?: string;
}

export function provideVendorModuleOptions(
  options?: VendorModuleOptions
): VendorApiOptionsService {
  const roleServiceOptions = new VendorApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      roleServiceOptions.apiUrl = options.apiUrl;
    }
  }

  return roleServiceOptions;
}
