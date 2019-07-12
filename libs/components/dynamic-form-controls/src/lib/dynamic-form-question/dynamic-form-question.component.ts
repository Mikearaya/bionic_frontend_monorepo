import { Component, OnInit, Input } from '@angular/core';
import { BaseFormControlModel } from '../models/base-form-control.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bionic-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() question: BaseFormControlModel<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
