import { VehicleCondition } from './vehicle-condition.model';

export interface RentContractModel {
  Id: number;
  CustomerName: string;
  PlateCode: string;
  PlateNumber: string;
  StartDate: Date | string;
  ReturnDate: Date | string | null;
  RentedBy: string;
  Date: Date | string | null;
  RentPrice: number;
  ChassisNumber: string;
  LibreNumber: string;
  MotorNumber: string;
  FuielType: string;
  TotalPassangers: string;
  VehicleCC: string;
  Duration: number;
  CollateralDeposit: number | null;
  HouseNumber: string;
  HotelName: string;
  HotelNumber: string;
  MainPhone: string;
  Nationality: string;
  PassportNumber: string;
  Country: string;
  City: string;
  DrivingLicenseNo: string;
  VehicleMake: string;
  VehicleModel: string;
  YearMade: string;
  VehicleColor: string;
  VehicleType: string;
  CylinderCount: string;
  VehicleCondition: VehicleCondition;
}
