import { VehicleCondition } from './vehicle-condition.model';

export interface VehicleRentView {
  Id: number;
  VehicleId: number;
  StartDate: Date;
  ReturnDate?: Date;
  CustomerId: number;
  OwnerRentingPrice: number;
  RentedPrice: number;
  ColateralDeposit?: number;
  VehicleCondition: VehicleCondition;
  DateAdded: Date;
  DateUpdated: Date;
}
