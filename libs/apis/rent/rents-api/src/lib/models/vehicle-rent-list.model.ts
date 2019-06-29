export interface VehicleRentListModel {
  Id: number;
  VehicleId: number;
  Vehicle: string;
  StartDate: Date | string | null;
  ReturnDate: Date | string | null;
  CustomerId: number;
  CustomerName: string;
  Status: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
