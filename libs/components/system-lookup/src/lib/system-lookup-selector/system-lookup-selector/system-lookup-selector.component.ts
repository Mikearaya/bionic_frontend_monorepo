import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { SystemLookupApiService } from '@bionic/apis/common/system-lookup-api';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Query, Predicate } from '@syncfusion/ej2-data';

@Component({
  selector: 'bionic-system-lookup-selector',
  templateUrl: './system-lookup-selector.component.html',
  styleUrls: ['./system-lookup-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SystemLookupSelectorComponent),
      multi: true
    }
  ]
})
export class SystemLookupSelectorComponent implements ControlValueAccessor {
  @Input()
  public searchBarPlaceholder: string;
  @Input()
  public lookupType: string;

  public _value: any;
  public disabled: boolean;
  public data;

  public lookups: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';
  constructor(private systemLookupApi: SystemLookupApiService) {}

  lookupChanged($event: any) {
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

    this.systemLookupApi
      .getLookupIndex(this.lookupType, e.text)
      .subscribe(data => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.systemLookupApi
      .getLookupIndex(this.lookupType, '')
      .subscribe((result: any) => {
        this.lookups = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.lookups.filter(a => a.Name === obj);
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
