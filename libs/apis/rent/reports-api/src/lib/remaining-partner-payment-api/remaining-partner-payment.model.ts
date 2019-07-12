export interface RemainingPartnerPayment {
  PartnerId: number;
  PartnerName: string;
  Amount: number | null;
  PaidAmount: number | null;
  RemainingPayment?: number;
}
