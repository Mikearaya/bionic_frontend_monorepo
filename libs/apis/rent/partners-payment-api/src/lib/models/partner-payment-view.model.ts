import { PartnerPaymentDetail } from './partner-payment-detail.model';

export interface PartnerPaymentView {
  Id: number;
  PartnerId: number | null;
  PartnerName: string;
  Date: Date | string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  PaymentDetails: PartnerPaymentDetail[];
}
