import { CustomerPaymentDetail } from './customer-payment-detail.model';

export interface CustomerPaymentView {
  Id: number;
  CustomerId: number | null;
  CustomerName: string;
  Date: Date | string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  PaymentDetails: CustomerPaymentDetail[];
}
