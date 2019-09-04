import { ShipmentViewDetail } from './shipment-detail-view';

export interface ShipmentView {
  Id?: number;
  CustomerOrderId: number;
  DeliveryDate: Date;
  CreatedOn: Date;
  BookedBy: number;
  BookingUser: string;
  DateAdded: Date;
  Status: string;
  ShipmentItem: ShipmentViewDetail[];
}
