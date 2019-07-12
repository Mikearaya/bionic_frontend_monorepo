import { Component, forwardRef } from '@angular/core';
import {
  CustomersApiService,
  CustomerIndexModel
} from '@bionic/apis/rent/customer-api';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Predicate, Query } from '@syncfusion/ej2-data/src';

@Component({
  selector: 'bionic-customer-selector',
  template: `
    <ejs-dropdownlist
      id="customer"
      [enabled]="!disabled"
      name="customer"
      placeholder="search for customer"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="customers"
      (change)="customerChanged($event)"
    ></ejs-dropdownlist>
  `,
  styleUrls: ['./customer-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerSelectorComponent),
      multi: true
    }
  ]
})
export class CustomerSelectorComponent implements ControlValueAccessor {
  constructor(private customerApi: CustomersApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public customers: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  customerChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.customerApi
      .getCustomersIndex(e.text)
      .subscribe((data: CustomerIndexModel[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.customerApi
      .getCustomersIndex()
      .subscribe((result: CustomerIndexModel[]) => {
        this.customers = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.customers.filter(a => a.Id === obj);
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
