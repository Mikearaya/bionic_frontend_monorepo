export interface InvoicePaymentModel {
  Id: number;
  InvoiceNo: number;
  Amount: number;
  CheckNo: string;
  Date: Date | string;
  Note: string;
}
