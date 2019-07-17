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
  OperationModel
} from '@bionic/apis/shipment/operations-api';

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
        .subscribe((data: OperationViewModel) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.operationForm = this.formBuilder.group({
      CustomerId: ['', Validators.required],
      DriverId: ['', Validators.required],
      VehicleId: ['', Validators.required],
      TrailorId: [''],
      StartPoint: ['', Validators.required],
      Destination: ['', Validators.required],
      ScheduledDeparture: ['', Validators.required],
      ScheduleArrival: ['', Validators.required],
      ArrivalDate: [''],
      DepartureDate: [''],
      DocumentsRecievedOn: [''],
      CargoWeight: ['', Validators.required],
      CargoType: ['', Validators.required],
      Distance: ['', Validators.required],
      Price: ['', Validators.required],
      DriverCost: ['', Validators.required],
      LoadedBy: [''],
      LoaderPaidBy: [''],
      TransitNumber: [''],
      WayBillNumber: [''],
      ExtraNote: ['']
    });
  }

  private initializeForm(operation: OperationViewModel): void {
    this.operationForm = this.formBuilder.group({
      CustomerId: [operation.CustomerId, Validators.required],
      DriverId: [operation.DriverId, Validators.required],
      VehicleId: [operation.VehicleId, Validators.required],
      TrailorId: [operation.TrailorId],
      StartPoint: [operation.StartPoint, Validators.required],
      Destination: [operation.Destination, Validators.required],
      ScheduledDeparture: [operation.ScheduledDeparture, Validators.required],
      ScheduleArrival: [operation.ScheduledArrival, Validators.required],
      ArrivalDate: [operation.ArrivalDate],
      DepartureDate: [operation.DepartureDate],
      DocumentsRecievedOn: [operation.DocumentsRecievedOn],
      CargoWeight: [operation.CargoWeight, Validators.required],
      CargoType: [operation.CargoType, Validators.required],
      Distance: [operation.Distance, Validators.required],
      Price: [operation.Price, Validators.required],
      DriverCost: [operation.DriverCost, Validators.required],
      LoadedBy: [operation.LoadedBy],
      LoaderPaidBy: [operation.LoaderPaidBy],
      TransitNumber: [operation.TransitNumber],
      WayBillNumber: [operation.WayBillNumber],
      ExtraNote: [operation.ExtraNote]
    });
  }

  getFormControl(control: string): FormControl {
    return this.operationForm.get(control) as FormControl;
  }

  onSubmit(): void {}

  private prepareFormData(form: FormGroup): OperationModel | null {
    if (form.valid) {
    } else {
      return null;
    }
  }
}
