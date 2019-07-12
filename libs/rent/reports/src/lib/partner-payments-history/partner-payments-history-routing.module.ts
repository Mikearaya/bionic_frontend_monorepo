import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerPaymentsHistoryComponent } from './partner-payments-history.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerPaymentsHistoryComponent,
    data: {
      breadCrum: 'Payments Payment History',
      claim: 'canViewRentHistory'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerPaymentsHistoryRoutingModule {}
