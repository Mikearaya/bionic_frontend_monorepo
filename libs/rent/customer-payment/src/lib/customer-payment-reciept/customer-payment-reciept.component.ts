import { Component, OnInit } from '@angular/core';
import {
  CustomersPaymentApiService,
  CustomerPaymentView
} from '@bionic/apis/rent/customers-payment-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bionic-customer-payment-reciept',
  templateUrl: './customer-payment-reciept.component.html',
  styleUrls: ['./customer-payment-reciept.component.css']
})
export class CustomerPaymentRecieptComponent implements OnInit {
  private paymentId: number;
  data: CustomerPaymentView;
  totalPayment = 0;

  constructor(
    private customerPaymentApi: CustomersPaymentApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paymentId = +this.activatedRoute.snapshot.paramMap.get('paymentId');

    if (this.paymentId) {
      this.customerPaymentApi
        .getCustomerPaymentById(this.paymentId)
        .subscribe((data: CustomerPaymentView) => {
          this.data = data;
          this.data.PaymentDetails.forEach(
            element => (this.totalPayment += element.Amount)
          );
        });
    }
  }
}
