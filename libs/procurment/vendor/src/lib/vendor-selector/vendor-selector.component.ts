import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VendorApiService } from '@bionic/apis/procurment/vendor-api';

import { Query, Predicate } from '@syncfusion/ej2-data';

@Component({
  selector: 'bionic-vendor-selector',
  template: `
    <ejs-dropdownlist
      id="vedors"
      [enabled]="!disabled"
      name="vedors"
      placeholder="Search Vedors"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="vedors"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="lookupChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VendorSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./vendor-selector.component.css']
})
export class VendorSelectorComponent implements ControlValueAccessor {
  @Input()
  public searchBarPlaceholder: string;
  @Input()
  public lookupType: string;

  public _value: any;
  public disabled: boolean;
  public data;

  public vedors: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private vendorApi: VendorApiService) {}

  lookupChanged($event: any) {
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

    this.vendorApi.getVendorIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.vendorApi.getVendorIndex('').subscribe((result: any) => {
      this.vedors = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.vedors.filter(a => a.Name === obj);
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
