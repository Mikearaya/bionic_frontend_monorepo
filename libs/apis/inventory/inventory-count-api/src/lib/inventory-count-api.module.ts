import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryCountApiOptionsService } from './inventory-count-api-options.service';
import { HttpClientModule } from '@angular/common/http';
import { InventoryCountApiService } from './inventory-count-api.service';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<
  InventoryCountModuleOptions
>('forRoot()  Inventory Count Api configuration.');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [InventoryCountApiService]
})
export class InventoryCountApiModule {
  static forRoot(options?: InventoryCountModuleOptions): ModuleWithProviders {
    return {
      ngModule: InventoryCountApiModule,
      providers: [
        { provide: FOR_ROOT_OPTIONS_TOKEN, useValue: options },
        {
          provide: InventoryCountApiOptionsService,
          useFactory: provideInventoryCountModuleOptions,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}

export interface InventoryCountModuleOptions {
  apiUrl?: string;
}

export function provideInventoryCountModuleOptions(
  options?: InventoryCountModuleOptions
): InventoryCountApiOptionsService {
  const inventoryCountOptions = new InventoryCountApiOptionsService();
  if (options) {
    if (typeof options.apiUrl === 'string') {
      inventoryCountOptions.apiUrl = options.apiUrl;
    }
  }

  return inventoryCountOptions;
}
