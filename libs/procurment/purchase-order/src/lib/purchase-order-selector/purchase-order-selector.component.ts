import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter
} from '@angular/core';
import {
  PurchaseOrderApiService,
  PurchaseOrderFilterModel
} from '@bionic/apis/procurment/purchase-order-api';
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
  @Input()
  public type: string;
  @Output()
  public selected: EventEmitter<any> = new EventEmitter();

  public _value: any;
  public disabled: boolean;
  public data;

  public purchaseOrders: any;
  public fields: object = { value: 'Id', text: 'Vendor' };

  public text = '';
  constructor(private purchaseOrderApi: PurchaseOrderApiService) {}

  purchaseOrderChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
      this.selected.emit($event.itemData);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;
    const predicate = new Predicate('Vendor', 'Contains', e.text);

    let query = new Query();

    query = e.text !== '' ? query.where(predicate) : query;

    this.purchaseOrderApi
      .getPurchaseOrdersIndex({ Id: e.text, Type: this.type })
      .subscribe(data => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.purchaseOrderApi
      .getPurchaseOrdersIndex({ Type: this.type })
      .subscribe((result: any) => {
        this.purchaseOrders = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.purchaseOrders.filter(a => a.Id === obj);
            data.forEach(element => {
              this.text = element.Vendor;
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
