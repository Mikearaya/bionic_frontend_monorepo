import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomerInvoiceApiService } from '@bionic/apis/crm/customer-invoice-api';
import { Predicate, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'bionic-customer-invoice-selector',
  template: `
    <ejs-dropdownlist
      id="customers"
      [enabled]="!disabled"
      name="customers"
      placeholder="Search customers"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="customers"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="customerChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerInvoiceSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./customer-invoice-selector.component.css']
})
export class CustomerInvoiceSelectorComponent {
  public _value: any;
  public disabled: boolean;
  onChange;
  public data;

  @Input()
  public searchBarPlaceholder: string;
  public customers: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private itemApi: CustomerInvoiceApiService) {}

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
    const predicate = new Predicate('Name', 'Contains', e.text);

    let query = new Query();

    query = e.text !== '' ? query.where(predicate) : query;

    this.itemApi.getCustomerInvoiceIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = data => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.itemApi.getCustomerInvoiceIndex('').subscribe((result: any) => {
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
