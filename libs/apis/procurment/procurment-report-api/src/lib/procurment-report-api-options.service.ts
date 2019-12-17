import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcurmentReportApiOptionsService {
  apiUrl = 'procurments/reports';

  constructor() {}
}
