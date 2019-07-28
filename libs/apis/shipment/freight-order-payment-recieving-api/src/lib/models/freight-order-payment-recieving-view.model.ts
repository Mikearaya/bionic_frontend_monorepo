export interface FreightOrderPaymentRecievingView {
  Id: number;
  FreightOrderId: number;
  FreightOrderNo: string;
  Customer: string;
  RecievedAmount: number | null;
  CheckNo: string;
  RecievedDate: Date | string | null;
  DepositedTo: number | null;
  BankName: string;
}
