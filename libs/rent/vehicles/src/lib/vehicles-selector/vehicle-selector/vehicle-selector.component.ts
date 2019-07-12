import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  VehiclesApiService,
  VehicleIndex
} from '@bionic/apis/rent/vehicles-api';
import { Predicate, Query } from '@syncfusion/ej2-data/src';

@Component({
  selector: 'bionic-vehicle-selector',
  template: `
    <ejs-dropdownlist
      id="vehicle"
      [enabled]="!disabled"
      #vehicleElement
      name="vehicle"
      placeholder="search for vehicle"
      [text]="text"
      [fields]="fields"
      [allowFiltering]="true"
      (filtering)="onFiltering($event)"
      [dataSource]="vehicles"
      (change)="vehicleChanged($event)"
    ></ejs-dropdownlist>
  `,
  styleUrls: ['./vehicle-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VehicleSelectorComponent),
      multi: true
    }
  ]
})
export class VehicleSelectorComponent implements ControlValueAccessor {
  constructor(private vehicleApi: VehiclesApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public vehicles: any;
  public fields: object = { value: 'Id', text: 'PlateNumber' };

  public text = '';

  vehicleChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;
    const predicate = new Predicate('PlateNumber', 'Contains', e.text);

    let query = new Query();

    query = e.text !== '' ? query.where(predicate) : query;

    this.vehicleApi
      .getVehiclesIndex(e.text)
      .subscribe((data: VehicleIndex[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.vehicleApi.getVehiclesIndex('').subscribe((result: any) => {
      this.vehicles = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.vehicles.filter(a => a.Id === obj);
          data.forEach(element => {
            this.text = element.PlateNumber;
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
