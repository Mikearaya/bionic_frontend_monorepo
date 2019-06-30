import { CustomerPaymentDetail } from './customer-payment-detail.model';

export class CustomerPayment {
  Id?: number;
  CustomerId: number;
  Date: Date | string;
  Rents: CustomerPaymentDetail[] = [];
  DeletedIds?: number[] = [];
}
