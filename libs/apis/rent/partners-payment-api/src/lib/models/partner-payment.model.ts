import { PartnerPaymentDetail } from './partner-payment-detail.model';

export interface PartnerPayment {
  Id?: number;
  PartnerId: number;
  Date: Date | string;
  Rents: PartnerPaymentDetail[];
  DeletedIds?: number[];
}
