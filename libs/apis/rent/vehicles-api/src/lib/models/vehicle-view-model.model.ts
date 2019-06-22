export interface VehicleViewModel {
  Id: number;
  OwnerId: number | null;
  Make: string;
  Model: string;
  YearMade: string;
  Color: string;
  Type: string;
  ChassisNumber: string;
  MotorNumber: string;
  FuielType: string;
  Cc: string;
  TotalPassanger: number;
  CylinderCount: number | null;
  LibreNo: string;
  PlateCode: string;
  PlateNumber: string;
  Transmission: string;
  DateUpdated: Date | string | null;
}
