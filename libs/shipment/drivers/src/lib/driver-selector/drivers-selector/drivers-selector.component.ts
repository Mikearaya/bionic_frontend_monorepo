import { Component, OnInit, forwardRef } from '@angular/core';
import {
  DriversApiService,
  DriversIndexModel
} from '@bionic/apis/shipment/drivers-api';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bionic-drivers-selector',
  template: `
    <ejs-dropdownlist
      id="Drivers"
      [enabled]="!disabled"
      name="Drivers"
      placeholder="Search  Driver"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="drivers"
      (change)="driverChanged($event)"
    ></ejs-dropdownlist>
  `,
  styleUrls: ['./drivers-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DriversSelectorComponent),
      multi: true
    }
  ]
})
export class DriversSelectorComponent implements ControlValueAccessor {
  constructor(private driversApi: DriversApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public drivers: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  driverChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.driversApi
      .getDriversIndex(e.text)
      .subscribe((data: DriversIndexModel[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.driversApi
      .getDriversIndex()
      .subscribe((result: DriversIndexModel[]) => {
        this.drivers = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.drivers.filter(a => a.Id === obj);
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
