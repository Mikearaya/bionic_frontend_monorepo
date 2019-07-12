import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemainingPartnerPaymentViewComponent } from '../remaining-partner-payment/remaining-partner-payment-view/remaining-partner-payment-view.component';

const routes: Routes = [
  { path: '', component: RemainingPartnerPaymentViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemainingCustomerPaymentRoutingModule {}
