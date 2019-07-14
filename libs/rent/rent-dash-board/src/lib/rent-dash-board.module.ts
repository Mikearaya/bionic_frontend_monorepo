import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RentDashboardComponent } from './rent-dashboard/rent-dashboard.component';
import { RentDashBoardApiModule } from '@bionic/apis/rent/rent-dash-board-api';
@NgModule({
  imports: [
    CommonModule,
    RentDashBoardApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: RentDashboardComponent,
        data: { breadCrum: 'Dashboard', title: 'DashBoard' }
      }
    ])
  ],
  declarations: [RentDashboardComponent]
})
export class RentDashBoardModule {}
