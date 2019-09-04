import {
  Component,
  OnInit,
  Input,
  forwardRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { StockBatchApiService } from '@bionic/apis/inventory/stock-batch-api';

@Component({
  selector: 'bionic-stock-batch-selector',
  template: `
    <ejs-dropdownlist
      id="batchs"
      [enabled]="!disabled"
      name="batchs"
      placeholder="Search batchs"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="batchs"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="batchChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StockBatchSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./stock-batch-selector.component.css']
})
export class StockBatchSelectorComponent
  implements ControlValueAccessor, OnChanges {
  public _value: any;
  public disabled: boolean;
  onChange;
  public data;

  @Input()
  public itemId: number;

  @Input()
  public searchBarPlaceholder: string;
  public batchs: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private stockBatchApi: StockBatchApiService) {}

  batchChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  ngOnChanges(e: SimpleChanges): void {
    if (e.vendorId) {
      this.stockBatchApi.getBatchsIndex('', this.itemId).subscribe(data => {
        this.batchs = data;
      });
    }
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;
    const predicate = new Predicate('Name', 'Contains', e.text);

    let query = new Query();

    query = e.text !== '' ? query.where(predicate) : query;

    this.stockBatchApi.getBatchsIndex(e.text, this.itemId).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = data => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.stockBatchApi
      .getBatchsIndex('', this.itemId)
      .subscribe((result: any) => {
        this.batchs = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.batchs.filter(a => a.Id === obj);
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
