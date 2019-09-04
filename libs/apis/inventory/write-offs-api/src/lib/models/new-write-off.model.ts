import { WriteOffItemModel } from './write-off-item.model';

export class NewWriteOffModel {
  ItemId: number;
  Note: string;
  Type: string;
  Status: string;
  WriteOffBatchs: WriteOffItemModel[] = [];
}
