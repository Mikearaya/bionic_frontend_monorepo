export interface InvoicePaymentStatusView {
  InvoiceId: number;
  PaidAmount: number | null;
  TotalAmount: number;
  RemainingAmount: number;
}
