export interface PartnerPaymentListView {
  Id: number;
  PartnerId: number | null;
  PartnerName: string;
  PaidAmount: number;
  Date: Date | string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
