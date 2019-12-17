import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProcurmentReportApiOptionsService } from './procurment-report-api-options.service';
import { ProcurmentReportApiService } from './procurment-report-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  ProcurmentReportModuleOptions
>('forRoot() Purchase Order configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ProcurmentReportApiService]
})
export class ProcurmentReportApiModule {
  static forRoot(options?: ProcurmentReportModuleOptions): ModuleWithProviders {
    return {
      ngModule: ProcurmentReportApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: ProcurmentReportApiOptionsService,
          useFactory: provideProcurmentReportModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface ProcurmentReportModuleOptions {
  apiUrl?: string;
}

export function provideProcurmentReportModuleOptions(
  options?: ProcurmentReportModuleOptions
): ProcurmentReportApiOptionsService {
  const purchaseRecievingOptions = new ProcurmentReportApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      purchaseRecievingOptions.apiUrl = options.apiUrl;
    }
  }

  return purchaseRecievingOptions;
}
