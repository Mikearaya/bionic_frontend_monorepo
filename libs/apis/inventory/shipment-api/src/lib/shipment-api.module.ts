import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentApiOptionsService } from './shipment-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentApiService } from './shipment-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ShipmentsModuleOptions>(
  'forRoot() Shipment Api configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ShipmentApiService]
})
export class ShipmentApiModule {
  static forRoot(options?: ShipmentsModuleOptions): ModuleWithProviders {
    return {
      ngModule: ShipmentApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: ShipmentApiOptionsService,
          useFactory: provideShipmentsModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface ShipmentsModuleOptions {
  apiUrl?: string;
}

export function provideShipmentsModuleOptions(
  options?: ShipmentsModuleOptions
): ShipmentApiOptionsService {
  const shipmentOptions = new ShipmentApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      shipmentOptions.apiUrl = options.apiUrl;
    }
  }

  return shipmentOptions;
}
