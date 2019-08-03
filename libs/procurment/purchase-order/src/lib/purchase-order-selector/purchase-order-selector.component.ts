import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PurchaseOrderApiService } from '@bionic/apis/procurment/purchase-order-api';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bionic-purchase-order-selector',
  template: `
    <ejs-dropdownlist
      id="purchaseOrders"
      [enabled]="!disabled"
      name="purchaseOrders"
      placeholder="Search Purchase Orders"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="purchaseOrders"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="purchaseOrderChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PurchaseOrderSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./purchase-order-selector.component.css']
})
export class PurchaseOrderSelectorComponent implements ControlValueAccessor {
  @Input()
  public searchBarPlaceholder: string;

  public _value: any;
  public disabled: boolean;
  public data;

  public purchaseOrders: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private purchaseOrderApi: PurchaseOrderApiService) {}

  purchaseOrderChanged($event: any) {
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

    this.purchaseOrderApi.getPurchaseOrdersIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.purchaseOrderApi
      .getPurchaseOrdersIndex('')
      .subscribe((result: any) => {
        this.purchaseOrders = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.purchaseOrders.filter(a => a.Name === obj);
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
