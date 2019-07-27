import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  OperationsApiService,
  OperationViewModel,
  OperationModel,
  OperationsDetailViewModel
} from '@bionic/apis/shipment/operations-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnInit {
  operationForm: FormGroup;
  isUpdate: boolean;
  private operationId: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private operationApi: OperationsApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.operationId = +this.activatedRoute.snapshot.paramMap.get(
      'operationId'
    );

    if (this.operationId) {
      this.isUpdate = true;
      this.operationApi
        .getOperationById(this.operationId)
        .subscribe((data: OperationsDetailViewModel) =>
          this.initializeForm(data)
        );
    }
  }

  private createForm(): void {
    this.operationForm = this.formBuilder.group({
      CustomerId: ['', Validators.required],
      StartPoint: ['', Validators.required],
      Destination: ['', Validators.required],
      ScheduleDeparture: ['', Validators.required],
      ScheduledArrival: ['', Validators.required],
      DocumentsRecievedOn: [''],
      ExtraNote: ['']
    });
  }

  private initializeForm(operation: OperationsDetailViewModel): void {
    this.operationForm.patchValue(operation);
  }

  getFormControl(control: string): FormControl {
    return this.operationForm.get(control) as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData(this.operationForm);

    if (this.isUpdate && formData) {
      this.operationApi
        .updateOperation(formData)
        .subscribe(
          () => alert('operation updated successfuly'),
          (error: HttpErrorResponse) =>
            alert('Unable to update operation try again later')
        );
    } else if (formData) {
      this.operationApi.createOperation(formData).subscribe(
        () => {
          this.operationForm.reset();
          alert('operation created successfuly');
        },
        (error: HttpErrorResponse) =>
          alert('Unable to create operation try again later')
      );
    }
  }

  private prepareFormData(form: FormGroup): OperationModel | null {
    if (form.valid) {
      const operation: OperationModel = {
        CustomerId: this.getFormControl('CustomerId').value,
        StartPoint: this.getFormControl('StartPoint').value,
        Destination: this.getFormControl('Destination').value,
        ScheduleDeparture: this.getFormControl('ScheduledDeparture').value,
        ScheduledArrival: this.getFormControl('ScheduleArrival').value,
        DocumentsRecievedOn: this.getFormControl('DocumentsRecievedOn').value,
        ExtraNote: this.getFormControl('ExtraNote').value
      };

      if (this.operationId) {
        operation.Id = this.operationId;
      }
      return operation;
    } else {
      return null;
    }
  }
}
