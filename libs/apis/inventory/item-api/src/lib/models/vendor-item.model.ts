export interface VendorItemViewModel {
  id: number;
  code: string;
  name: string;
  minimumQuantity: number | null;
  price: number | null;
  vendorItemCode: string;
  priority: number | null;
  photo: string;
  primaryUomId: number;
  primaryUom: string;
  groupId: number;
  leadTime: number | null;
  group: string;
  dateUpdated: Date | string | null;
  dateAdded: Date | string | null;
}
