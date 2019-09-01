import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { StorageLocationsApiService } from '@bionic/apis/inventory/storage-locations-api';
import { Predicate, Query } from '@syncfusion/ej2-data';

@Component({
  template: `
    <ejs-dropdownlist
      id="uoms"
      [enabled]="!disabled"
      name="uoms"
      placeholder="Search Storage Location"
      [text]="text"
      [allowFiltering]="true"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="uoms"
      [filterBarPlaceholder]="searchBarPlaceholder"
      (change)="storageChanged($event)"
    >
    </ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StorageLocationSelectorComponent),
      multi: true
    }
  ],
  styleUrls: ['./storage-location-selector.component.css']
})
export class StorageLocationSelectorComponent implements ControlValueAccessor {
  public _value: any;
  public disabled: boolean;
  onChange;
  public data;

  @Input()
  public searchBarPlaceholder: string;
  public uoms: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private storageLocationApi: StorageLocationsApiService) {}

  storageChanged($event: any) {
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

    this.storageLocationApi.getStorageLocationsIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = data => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.storageLocationApi
      .getStorageLocationsIndex('')
      .subscribe((result: any) => {
        this.uoms = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.uoms.filter(a => a.Id === obj);
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
