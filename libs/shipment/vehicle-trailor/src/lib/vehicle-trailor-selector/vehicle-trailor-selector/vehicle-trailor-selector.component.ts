import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  VehicleTrailorApiService,
  VehicleTrailorIndex
} from '@bionic/apis/shipment/vehicle-trailor-api';

@Component({
  selector: 'bionic-vehicle-trailor-selector',
  styleUrls: ['./vehicle-trailor-selector.component.css'],
  template: `
    <ejs-dropdownlist
      id="trailors"
      [enabled]="!disabled"
      name="trailors"
      placeholder="Search  Driver"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="trailors"
      (change)="bankChanged($event)"
    ></ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VehicleTrailorSelectorComponent),
      multi: true
    }
  ]
})
export class VehicleTrailorSelectorComponent implements ControlValueAccessor {
  constructor(private vehicleTrailorApi: VehicleTrailorApiService) {}

  public _value: any;
  public disabled: boolean;
  public data;

  public trailors: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  bankChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.vehicleTrailorApi
      .getVehicleTrailorsIndex(e.text)
      .subscribe((data: VehicleTrailorIndex[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.vehicleTrailorApi
      .getVehicleTrailorsIndex()
      .subscribe((result: VehicleTrailorIndex[]) => {
        this.trailors = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.trailors.filter(a => a.Id === obj);
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
