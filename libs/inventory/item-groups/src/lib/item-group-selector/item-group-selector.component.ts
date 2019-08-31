import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ItemGroupsApiService } from '@bionic/apis/inventory/item-groups-api';
import { Predicate, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'bionic-item-group-selector',
  template: `
    <ejs-dropdownlist
      id="itemGroups"
      [enabled]="!disabled"
      name="itemGroups"
      placeholder="Search itemGroups"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="itemGroups"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="itemChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ItemGroupSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./item-group-selector.component.css']
})
export class ItemGroupSelectorComponent implements ControlValueAccessor {
  public _value: any;
  public disabled: boolean;
  onChange;
  public data;
  @Input()
  public itemGroupId: number;

  @Input()
  public searchBarPlaceholder: string;
  public itemGroups: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private itemGroupApi: ItemGroupsApiService) {}

  itemChanged($event: any) {
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

    this.itemGroupApi.getItemGroupIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = data => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.itemGroupApi.getItemGroupIndex('').subscribe((result: any) => {
      this.itemGroups = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.itemGroups.filter(a => a.Id === obj);
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
