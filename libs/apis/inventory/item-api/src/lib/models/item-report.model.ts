export interface ItemReportModel {
  id: number;
  item: string;
  itemCode: string;
  inStock: number;
  available: number;
  booked: number;
  totalExpected: number;
  totalWriteOff: number;
  expectedAvailable: number;
  expectedBooked: number;
  minimumQuantity: number | null;
  primaryUom: string;
  primaryUomId: number;
  totalCost: number;
  averageCost: number;
}
