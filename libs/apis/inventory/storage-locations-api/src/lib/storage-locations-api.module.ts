import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageLocationsApiOptionsService } from './storage-locations-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageLocationsApiService } from './storage-locations-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  StorageLocationsModuleOptions
>('forRoot() Storage Locations Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [StorageLocationsApiService]
})
export class StorageLocationsApiModule {
  static forRoot(options?: StorageLocationsModuleOptions): ModuleWithProviders {
    return {
      ngModule: StorageLocationsApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: StorageLocationsApiOptionsService,
          useFactory: provideStorageLocationsModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface StorageLocationsModuleOptions {
  apiUrl?: string;
}

export function provideStorageLocationsModuleOptions(
  options?: StorageLocationsModuleOptions
): StorageLocationsApiOptionsService {
  const storageLocationsOptions = new StorageLocationsApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      storageLocationsOptions.apiUrl = options.apiUrl;
    }
  }

  return storageLocationsOptions;
}
