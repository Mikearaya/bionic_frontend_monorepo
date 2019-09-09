import { WriteOffItemModel } from './write-off-item.model';

export class UpdatedWriteOffModel {
  Id: number;
  Status: string;
  Note: string;
  Type: string;
  WriteOffDetail: WriteOffItemModel[] = [];
}
