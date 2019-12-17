import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrmReportApiOptionsService {
  apiUrl = 'crm/reports';

  constructor() {}
}
