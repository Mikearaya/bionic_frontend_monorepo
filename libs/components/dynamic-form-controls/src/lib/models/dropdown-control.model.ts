import { BaseFormControlModel } from './base-form-control.model';

export class DropdownQuestion extends BaseFormControlModel<string> {
  controlType = 'dropdown';
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
