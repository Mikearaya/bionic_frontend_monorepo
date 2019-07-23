import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { BankAccountApiService } from '@bionic/apis/shipment/bank-account-api';

@Component({
  selector: 'bionic-bank-account-view',
  templateUrl: './bank-account-view.component.html',
  styleUrls: ['./bank-account-view.component.css']
})
export class BankAccountViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'BankName',
      header: 'Name',
      visible: true,
      type: 'string'
    },
    {
      key: 'AccountNumber',
      header: 'AccountNumber',
      visible: true,
      width: 150,
      type: 'string'
    }
  ];

  constructor(private bankAccountApi: BankAccountApiService) {
    this.data = this.bankAccountApi;
    this.bankAccountApi.execute(new QueryString());
  }

  ngOnInit() {
    this.bankAccountApi.execute(new QueryString());
  }

  deleteAccount(data: any) {
    this.bankAccountApi
      .deleteBankAccount(data['Id'])
      .subscribe(() => alert('Bank Account delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.bankAccountApi.execute(state);
  }
}
