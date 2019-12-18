import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryReportApiOptionsService } from './inventory-report-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { InventoryReportApiService } from './inventory-report-api.service';
export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<InventoryReportModule>(
  'forRoot() Item Api configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [InventoryReportApiService]
})
export class InventoryReportApiModule {
  static forRoot(options?: InventoryReportModule): ModuleWithProviders {
    return {
      ngModule: InventoryReportApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: InventoryReportApiOptionsService,
          useFactory: provideInventoryReportModule,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface InventoryReportModule {
  apiUrl?: string;
}

export function provideInventoryReportModule(
  options?: InventoryReportModule
): InventoryReportApiOptionsService {
  const purchaseRecievingOptions = new InventoryReportApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
