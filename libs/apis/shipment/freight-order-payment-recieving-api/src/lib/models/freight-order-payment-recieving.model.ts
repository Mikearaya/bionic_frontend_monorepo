export interface FreightOrderPaymentRecieving {
  Id?: number;
  RecievedAmount: number;
  CheckNo: string;
  RecievedDate: Date | string;
  DepositedTo: number;
}
