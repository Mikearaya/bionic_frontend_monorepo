import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SystemRoleApiService } from '@bionic/apis/common/system-roles-api';
import { Query, Predicate } from '@syncfusion/ej2-data';

@Component({
  selector: 'bionic-system-role-selector',
  templateUrl: './system-role-selector.component.html',
  styleUrls: ['./system-role-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SystemRoleSelectorComponent),
      multi: true
    }
  ]
})
export class SystemRoleSelectorComponent implements ControlValueAccessor {
  @Input()
  public searchBarPlaceholder: string;

  public _value: any;
  public disabled: boolean;
  public data;

  public roles: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private systemRoleApi: SystemRoleApiService) {}

  roleChanged($event: any) {
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

    this.systemRoleApi.getSystemRolesIndex(e.text).subscribe(data => {
      e.updateData(data);
    });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.systemRoleApi.getSystemRolesIndex('').subscribe((result: any) => {
      this.roles = result;
      if (this._value) {
        if (obj !== 0) {
          const data = this.roles.filter(a => a.Name === obj);
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
