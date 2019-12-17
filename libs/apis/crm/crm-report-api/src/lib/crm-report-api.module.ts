import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrmReportApiOptionsService } from './crm-report-api-options.service';
import { CrmReportApiService } from './crm-report-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  CrmReportApiModuleOptions
>('forRoot()  Crm Report  Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CrmReportApiService]
})
export class CrmReportApiModule {
  static forRoot(options?: CrmReportApiModuleOptions): ModuleWithProviders {
    return {
      ngModule: CrmReportApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: CrmReportApiOptionsService,
          useFactory: provideCrmReportApiModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface CrmReportApiModuleOptions {
  apiUrl?: string;
}

export function provideCrmReportApiModuleOptions(
  options?: CrmReportApiModuleOptions
): CrmReportApiOptionsService {
  const customerApiOptions = new CrmReportApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      customerApiOptions.apiUrl = options.apiUrl;
    }
  }

  return customerApiOptions;
}
