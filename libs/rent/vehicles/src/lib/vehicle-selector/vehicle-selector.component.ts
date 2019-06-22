import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {
  VehiclesApiService,
  VehicleIndex
} from '@bionic/apis/rent/vehicles-api';
import { Predicate, Query } from '@syncfusion/ej2-data/src';

@Component({
  selector: 'bionic-vehicle-selector',
  template: `
    <ejs-autocomplete
      id="account"
      [enabled]="!disabled"
      #accountElement
      name="account"
      placeholder="search for account"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [dataSource]="accounts"
      (change)="vehicleChanged($event)"
    ></ejs-autocomplete>
  `,
  styleUrls: ['./vehicle-selector.component.css']
})
export class VehicleSelectorComponent implements ControlValueAccessor {
  constructor(private vehicleApi: VehiclesApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public accounts: any;
  public fields: object = { value: 'Id', text: 'Name' };

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
    const predicate = new Predicate('Name', 'Contains', e.text);

    let query = new Query();

    query = e.text !== '' ? query.where(predicate) : query;

    this.vehicleApi.getVehiclesIndex().subscribe((data: VehicleIndex[]) => {
      e.updateData(data);
    });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.vehicleApi.getVehiclesIndex().subscribe((result: any) => {
      this.accounts = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.accounts.filter(a => a.Id === obj);
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
