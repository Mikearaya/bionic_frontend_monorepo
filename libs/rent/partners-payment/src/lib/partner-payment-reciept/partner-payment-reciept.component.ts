import { Component, OnInit } from '@angular/core';
import {
  PartnersPaymentApiService,
  PartnerPaymentView
} from '@bionic/apis/rent/partners-payment-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bionic-partner-payment-reciept',
  templateUrl: './partner-payment-reciept.component.html',
  styleUrls: ['./partner-payment-reciept.component.css']
})
export class PartnerPaymentRecieptComponent implements OnInit {
  private paymentId: number;
  data: PartnerPaymentView;
  totalPayment = 0;

  constructor(
    private partnerPaymentApi: PartnersPaymentApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paymentId = +this.activatedRoute.snapshot.paramMap.get('paymentId');

    if (this.paymentId) {
      this.partnerPaymentApi
        .getPartnerPaymentById(this.paymentId)
        .subscribe((data: PartnerPaymentView) => {
          this.data = data;
          this.data.PaymentDetails.forEach(
            element => (this.totalPayment += element.Amount)
          );
        });
    }
  }
}
