import {
  Component,
  OnInit,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ItemApiService } from '@bionic/apis/inventory/item-api';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Predicate, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'bionic-item-selector',
  template: `
    <ejs-dropdownlist
      id="items"
      [enabled]="!disabled"
      name="items"
      placeholder="Search items"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="items"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="itemChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ItemSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements ControlValueAccessor, OnChanges {
  public _value: any;
  public disabled: boolean;
  onChange;
  public data;
  @Input()
  public vendorId: number;

  @Input()
  public searchBarPlaceholder: string;
  public items: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private itemApi: ItemApiService) {}

  itemChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  ngOnChanges(e: SimpleChanges): void {
    console.log(e.vendorId);

    if (e.vendorId) {
      this.itemApi.getItemsIndex('', this.vendorId).subscribe(data => {
        this.items = data;
      });
    }
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;
    const predicate = new Predicate('Name', 'Contains', e.text);

    let query = new Query();

    query = e.text !== '' ? query.where(predicate) : query;

    this.itemApi.getItemsIndex(e.text, this.vendorId).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = data => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.itemApi.getItemsIndex('', this.vendorId).subscribe((result: any) => {
      this.items = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.items.filter(a => a.Id === obj);
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
