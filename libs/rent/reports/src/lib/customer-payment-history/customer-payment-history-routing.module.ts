import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerPaymentHistoryComponent } from './customer-payment-history.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerPaymentHistoryComponent,
    data: {
      breadCrum: 'Customer Payment History',
      claim: 'canViewRentHistory'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPaymentHistoryRoutingModule {}
