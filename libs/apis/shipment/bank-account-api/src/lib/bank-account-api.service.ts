import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';

import { DataStateChangeEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { BankAccountView } from './models/bank-account-view.model';
import { BankAccount } from './models/bank-account.model';
import { BankAccountIndex } from './models/bank-account-index.model';
import { map } from 'rxjs/operators';

@Injectable()
export class BankAccountApiService extends Subject<DataStateChangeEventArgs> {
  private apiUrl = `http://${window.location.hostname}:5000/api/banks`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getBankAccountById(id: number): Observable<BankAccountView> {
    return this.httpClient.get<BankAccountView>(`${this.apiUrl}/${id}`);
  }

  getBankAccountsList(): Observable<BankAccountView[]> {
    return this.httpClient.get<BankAccountView[]>(`${this.apiUrl}`);
  }

  createBankAccount(bankAccount: BankAccount): Observable<BankAccountView> {
    return this.httpClient.post<BankAccountView>(`${this.apiUrl}`, bankAccount);
  }

  updateBankAccount(bankAccount: BankAccount): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/${bankAccount.Id}`,
      bankAccount
    );
  }

  deleteBankAccount(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  execute(state: QueryString): void {
    this.getData(state).subscribe(a => this.next(a));
  }

  getData(state: QueryString): Observable<DataStateChangeEventArgs> {
    return this.httpClient
      .post(`${this.apiUrl}/filter`, state)
      .pipe(
        map(
          (response: any) =>
            ({
              result: response['Items'],
              count: parseInt(response['Count'], 10)
            } as DataResult)
        )
      )
      .pipe((data: any) => data);
  }

  getBankAccountsIndex(
    filterString: string = ''
  ): Observable<BankAccountIndex[]> {
    return this.httpClient.get<BankAccountIndex[]>(
      `${this.apiUrl}/index?name=${filterString}`
    );
  }
}
