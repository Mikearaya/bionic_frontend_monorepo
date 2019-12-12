import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerInvoicePaymentFormComponent } from './customer-invoice-payment-form/customer-invoice-payment-form.component';
import { CustomerInvoicePaymentViewComponent } from './customer-invoice-payment-view/customer-invoice-payment-view.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [CustomerInvoicePaymentFormComponent, CustomerInvoicePaymentViewComponent]
})
export class CustomerInvoicePaymentModule {}
