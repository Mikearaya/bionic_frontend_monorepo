import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteOffsApiOptionsService {
  apiUrl = 'inventory/write-offs';

  constructor() {}
}
