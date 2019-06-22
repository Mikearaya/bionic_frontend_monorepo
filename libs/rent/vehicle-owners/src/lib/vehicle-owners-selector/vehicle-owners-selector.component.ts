import { Component, forwardRef } from '@angular/core';
import { VehicleOwnersApiService } from '@bionic/apis/rent/vehicle-owners-api';
import { Query, Predicate } from '@syncfusion/ej2-data';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bionic-vehicle-owners-selector',
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
      (change)="accountChanged($event)"
    ></ejs-autocomplete>
  `,
  styleUrls: ['./vehicle-owners-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VehicleOwnersSelectorComponent),
      multi: true
    }
  ]
})
export class VehicleOwnersSelectorComponent implements ControlValueAccessor {
  constructor(private vehicleOwnersApi: VehicleOwnersApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public accounts: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  accountChanged($event: any) {
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

    this.vehicleOwnersApi.getVehicleOwnersIndex().subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.vehicleOwnersApi.getVehicleOwnersIndex().subscribe((result: any) => {
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
