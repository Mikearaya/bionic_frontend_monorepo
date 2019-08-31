export interface ItemGroupView {
  Id: number;
  GroupName: string;
  Description: string;
  ParentGroupId: number | null;
  ParentGroup: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;

}