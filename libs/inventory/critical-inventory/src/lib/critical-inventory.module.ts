import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CriticalInventoryApiModule } from '@bionic/apis/inventory/critical-inventory-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { CriticalStockViewComponent } from './critical-stock-view/critical-stock-view.component';
@NgModule({
  imports: [
    CommonModule,
    CriticalInventoryApiModule,
    DataGridModule,
    NotificationModule,

    RouterModule.forChild([
      {
        path: '',
        component: CriticalStockViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Critical Procured Items',
          claimType: 'canViewCriticalProcuredItems'
        }
      }
    ])
  ],
  declarations: [CriticalStockViewComponent]
})
export class CriticalInventoryModule {}
