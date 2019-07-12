import { BaseFormControlModel } from './base-form-control.model';

export class TextboxQuestion extends BaseFormControlModel<string> {
  controlType = 'textbox';
  type: string;
  checked: boolean;
  name: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.checked = options['checked'];
    this.name = options['name'];
  }
}
