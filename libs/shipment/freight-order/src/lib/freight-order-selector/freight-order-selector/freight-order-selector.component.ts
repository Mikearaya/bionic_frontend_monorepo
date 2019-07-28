import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  FreightOrderApiService,
  FreightOrderIndex
} from '@bionic/apis/shipment/freight-order-api';

@Component({
  selector: 'bionic-freight-order-selector',
  styleUrls: ['./freight-order-selector.component.css'],
  template: `
    <ejs-dropdownlist
      id="freightOrder"
      [enabled]="!disabled"
      name="freightOrder"
      placeholder="Search  Freight Order"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="freightOrder"
      (change)="freightOrderChanged($event)"
    ></ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreightOrderSelectorComponent),
      multi: true
    }
  ]
})
export class FreightOrderSelectorComponent implements ControlValueAccessor {
  constructor(private freightOrderApiu: FreightOrderApiService) {}
  public _value: any;
  public disabled: boolean;
  public data: FreightOrderIndex[] = [];

  public freightOrder: any;
  public fields: object = { value: 'Id', text: 'FreightOrderNo' };

  public text = '';

  freightOrderChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.freightOrderApiu
      .getFreightOrderIndex(e.text)
      .subscribe((data: FreightOrderIndex[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.freightOrderApiu
      .getFreightOrderIndex()
      .subscribe((result: FreightOrderIndex[]) => {
        this.freightOrder = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.freightOrder.filter(a => a.Id === obj);
            data.forEach(element => {
              this.text = element.FreightOrderNo;
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
