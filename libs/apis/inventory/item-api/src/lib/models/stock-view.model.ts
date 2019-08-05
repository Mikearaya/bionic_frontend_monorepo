export interface StockView {
  itemId: number;

  itemName: string;

  itemCode: string;

  inStock: number;
  available: number;

  booked: number;

  totalExpected: number;

  expectedAvailable: number;

  expectedBooked: number;

  totalCost: number;
  defaultStorageId: number;
  defaultStorage: string;

  averageCost: number;
}
