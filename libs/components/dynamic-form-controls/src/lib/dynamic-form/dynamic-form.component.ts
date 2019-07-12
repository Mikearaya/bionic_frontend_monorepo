import { Component, OnInit, Input } from '@angular/core';
import { BaseFormControlModel } from '../models/base-form-control.model';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService } from '../dynamic-form-control.service';

@Component({
  selector: 'bionic-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [DynamicFormControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: BaseFormControlModel<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicFormControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
