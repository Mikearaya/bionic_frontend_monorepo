import { WriteOffItemDetailModel } from './write-off-item-detail.model';

export class WriteOffDetailModel {
  Id: number;
  ItemId: number;
  ItemGroupId: number;
  Item: string;
  ItemGroup: string;
  Status: string;
  Note: string;
  Type: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  WriteOffItems: WriteOffItemDetailModel[];
}
