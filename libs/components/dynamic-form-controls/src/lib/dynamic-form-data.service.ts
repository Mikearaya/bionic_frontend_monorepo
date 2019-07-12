import { Injectable } from '@angular/core';
import { TextboxQuestion } from './models/textbox-control.model';
import { DropdownQuestion } from './models/dropdown-control.model';
import { BaseFormControlModel } from './models/base-form-control.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormDataService {
  getQuestions() {
    const questions: BaseFormControlModel<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        name: 'firstName',
        checked: true,
        type: 'checkbox',

        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
