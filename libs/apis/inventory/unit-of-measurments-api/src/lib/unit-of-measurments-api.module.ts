import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitOfMeasurmentsApiOptionsService } from './unit-of-measurments-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { UnitOfMeasurmentsApiService } from './unit-of-measurments-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  UnitOfMeasurmentsModuleOptions
>('forRoot() Item Group Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UnitOfMeasurmentsApiService]
})
export class UnitOfMeasurmentsApiModule {
  static forRoot(
    options?: UnitOfMeasurmentsModuleOptions
  ): ModuleWithProviders {
    return {
      ngModule: UnitOfMeasurmentsApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: UnitOfMeasurmentsApiOptionsService,
          useFactory: provideUnitOfMeasurmentsModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface UnitOfMeasurmentsModuleOptions {
  apiUrl?: string;
}

export function provideUnitOfMeasurmentsModuleOptions(
  options?: UnitOfMeasurmentsModuleOptions
): UnitOfMeasurmentsApiOptionsService {
  const purchaseRecievingOptions = new UnitOfMeasurmentsApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
