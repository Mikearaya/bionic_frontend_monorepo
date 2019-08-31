import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemGroupsApiOptionsService {
  apiUrl = 'inventory/item-groups';

  constructor() {}
}
