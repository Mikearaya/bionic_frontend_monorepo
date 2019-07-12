import { Component, Input, forwardRef } from '@angular/core';
import { SystemUserApiService } from '@bionic/apis/common/system-users-api';

import { Query, Predicate } from '@syncfusion/ej2-data';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'bionic-system-user-selector',
  templateUrl: './system-user-selector.component.html',
  styleUrls: ['./system-user-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SystemUserSelectorComponent),
      multi: true
    }
  ]
})
export class SystemUserSelectorComponent implements ControlValueAccessor {
  @Input()
  public searchBarPlaceholder: string;

  public _value: any;
  public disabled: boolean;
  public data;

  public users: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private systemUserApi: SystemUserApiService) {}

  userChanged($event: any) {
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

    this.systemUserApi.getUsersIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.systemUserApi.getUsersIndex('').subscribe((result: any) => {
      this.users = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.users.filter(a => a.Name === obj);
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
