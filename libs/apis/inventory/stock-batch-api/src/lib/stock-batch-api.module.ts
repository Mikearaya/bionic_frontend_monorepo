import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockBatchApiOptionsService } from './stock-batch-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { StockBatchApiService } from './stock-batch-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  StockBatchApiModuleOptions
>('forRoot() Item Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [StockBatchApiService]
})
export class StockBatchApiModule {
  static forRoot(options?: StockBatchApiModuleOptions): ModuleWithProviders {
    return {
      ngModule: StockBatchApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: StockBatchApiOptionsService,
          useFactory: provideStockBatchApiModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface StockBatchApiModuleOptions {
  apiUrl?: string;
}

export function provideStockBatchApiModuleOptions(
  options?: StockBatchApiModuleOptions
): StockBatchApiOptionsService {
  const stockBatchOptions = new StockBatchApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      stockBatchOptions.apiUrl = options.apiUrl;
    }
  }

  return stockBatchOptions;
}
