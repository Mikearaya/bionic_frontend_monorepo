import { ShipmentItems } from './shipment-item.model';

export interface Shipment {
  Id?: number;
  CustomerOrderId: number;
  BookedBy: number;
  DeliveryDate: Date;
  ShipmentNote: string;
  Status: string;
  ShipmentItems: ShipmentItems[];
}
