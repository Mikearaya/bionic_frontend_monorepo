import { Component, OnInit, forwardRef } from '@angular/core';
import {
  BankAccountApiService,
  BankAccountIndex
} from '@bionic/apis/shipment/bank-account-api';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'bionic-bank-account-selector',
  styleUrls: ['./bank-account-selector.component.css'],
  template: `
    <ejs-dropdownlist
      id="banks"
      [enabled]="!disabled"
      name="banks"
      placeholder="Search  Driver"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="banks"
      (change)="bankChanged($event)"
    ></ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BankAccountSelectorComponent),
      multi: true
    }
  ]
})
export class BankAccountSelectorComponent implements ControlValueAccessor {
  constructor(private bankAccountApi: BankAccountApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public banks: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  bankChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.bankAccountApi
      .getBankAccountsIndex(e.text)
      .subscribe((data: BankAccountIndex[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.bankAccountApi
      .getBankAccountsIndex()
      .subscribe((result: BankAccountIndex[]) => {
        this.banks = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.banks.filter(a => a.Id === obj);
            data.forEach(element => {
              this.text = element.Name;
            });
          }
        }
      });
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
