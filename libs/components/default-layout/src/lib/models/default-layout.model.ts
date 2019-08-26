export interface LayoutModel {
  id: string;
  name: string;
  enabled: boolean;
  expanded: boolean;
  url: string;
  icon?: string;
  selected: boolean;
  privilage: string;
}

export class DefaultLayoutModel {
  id: string;
  name: string;
  enabled = true;
  expanded = false;
  url: string;
  icon: string;
  selected: boolean;
  privilage: string;
  subChild?: LayoutModel[] = [];
}
