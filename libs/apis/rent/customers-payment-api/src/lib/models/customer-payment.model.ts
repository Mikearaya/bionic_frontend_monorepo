import { CustomerPaymentDetail } from './customer-payment-detail.model';

export interface CustomerPayment {
  Id: number;
  CustomerId: number;
  Date: Date | string;
  Rents: CustomerPaymentDetail[];
  DeletedIds: number[];
}
