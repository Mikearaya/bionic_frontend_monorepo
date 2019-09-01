import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageLocationsApiOptionsService {
  apiUrl = 'inventory/storage-locations';

  constructor() {}
}
