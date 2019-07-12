export interface RentHistoryModel {
  Id: number;
  CustomerName: string;
  StartDate: Date | string;
  EndDate: Date | string | null;
  Duration: number;
  Status: string;
  VehiclePlateNo: string;
  VehicleMake: string;
  RentedPrice: number | null;
  PaidAmount: number | null;
  PaymentStatus: string;
}
