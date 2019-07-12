import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormControlModel } from './models/base-form-control.model';

@Injectable()
export class DynamicFormControlService {
  constructor() {}

  toFormGroup(questions: BaseFormControlModel<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
