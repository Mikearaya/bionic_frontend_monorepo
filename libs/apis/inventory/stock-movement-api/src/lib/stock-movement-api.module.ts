import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockMovementApiOptionsService } from './stock-movement-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { StockMovementApiService } from './stock-movement-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  StockMovementApiModuleOptions
>('forRoot() Stock Movement Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [StockMovementApiService]
})
export class StockMovementApiModule {
  static forRoot(options?: StockMovementApiModuleOptions): ModuleWithProviders {
    return {
      ngModule: StockMovementApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: StockMovementApiOptionsService,
          useFactory: provideStockMovementApiModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface StockMovementApiModuleOptions {
  apiUrl?: string;
}

export function provideStockMovementApiModuleOptions(
  options?: StockMovementApiModuleOptions
): StockMovementApiOptionsService {
  const stockMovementOptions = new StockMovementApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      stockMovementOptions.apiUrl = options.apiUrl;
    }
  }

  return stockMovementOptions;
}
