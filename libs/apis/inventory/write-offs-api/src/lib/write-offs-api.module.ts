import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteOffsApiOptionsService } from './write-offs-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { WriteOffsApiService } from './write-offs-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<WriteOffsModuleOptions>(
  'forRoot() Write offs Api configuration.'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [WriteOffsApiService]
})
export class WriteOffsApiModule {
  static forRoot(options?: WriteOffsModuleOptions): ModuleWithProviders {
    return {
      ngModule: WriteOffsApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: WriteOffsApiOptionsService,
          useFactory: provideWriteOffsModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface WriteOffsModuleOptions {
  apiUrl?: string;
}

export function provideWriteOffsModuleOptions(
  options?: WriteOffsModuleOptions
): WriteOffsApiOptionsService {
  const writeOffsOptions = new WriteOffsApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      writeOffsOptions.apiUrl = options.apiUrl;
    }
  }

  return writeOffsOptions;
}
