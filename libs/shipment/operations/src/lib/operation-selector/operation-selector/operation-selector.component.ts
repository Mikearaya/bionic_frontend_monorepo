import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  OperationsApiService,
  OperationIndex
} from '@bionic/apis/shipment/operations-api';

@Component({
  selector: 'bionic-operation-selector',
  styleUrls: ['./operation-selector.component.css'],
  template: `
    <ejs-dropdownlist
      id="Operations"
      [enabled]="!disabled"
      name="Operations"
      placeholder="Search  Driver"
      [text]="text"
      [fields]="fields"
      (filtering)="onFiltering($event)"
      [allowFiltering]="true"
      [dataSource]="operations"
      (change)="operationChanged($event)"
    ></ejs-dropdownlist>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OperationSelectorComponent),
      multi: true
    }
  ]
})
export class OperationSelectorComponent implements ControlValueAccessor {
  constructor(private operationApi: OperationsApiService) {}
  public _value: any;
  public disabled: boolean;
  public data;

  public operations: any;
  public fields: object = { value: 'Id', text: 'Name' };

  public text = '';

  operationChanged($event: any) {
    if ($event.itemData) {
      this.onChanged($event.itemData['Id']);
    } else {
      this.onChanged('');
    }

    this.onTouched();
  }

  public onFiltering(e) {
    e.preventDefaultAction = true;

    this.operationApi
      .getOperationIndex(e.text)
      .subscribe((data: OperationIndex[]) => {
        e.updateData(data);
      });
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this._value = obj;

    this.operationApi
      .getOperationIndex()
      .subscribe((result: OperationIndex[]) => {
        this.operations = result;
        if (this._value) {
          if (obj !== 0) {
            const data = this.operations.filter(a => a.Id === obj);
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
