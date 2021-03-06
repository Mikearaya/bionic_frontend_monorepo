import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  LocationApiService,
  LocationIndexModel
} from '@bionic/apis/shipment/location-api';

@Component({
  selector: 'bionic-location-selector',
  styleUrls: ['./location-selector.component.css'],
  template: `
    <ejs-dropdownlist
      id="location"
      [enabled]="!disabled"
      name="location"
      placeholder="Search Location"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="locations"
      (change)="locationChanged($event)"
    ></ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LocationSelectorComponent),
      multi: true
    }
  ]
})
export class LocationSelectorComponent implements ControlValueAccessor {
  constructor(private locationApi: LocationApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public locations: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  locationChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.locationApi
      .getLocationIndex(e.text)
      .subscribe((data: LocationIndexModel[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.locationApi
      .getLocationIndex()
      .subscribe((result: LocationIndexModel[]) => {
        this.locations = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.locations.filter(a => a.Id === obj);
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
