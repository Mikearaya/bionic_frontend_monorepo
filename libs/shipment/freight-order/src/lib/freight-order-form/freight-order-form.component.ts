import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  FreightOrderApiService,
  FreightOrder,
  FreightOrderViewModel
} from '@bionic/apis/shipment/freight-order-api';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-freight-order-form',
  templateUrl: './freight-order-form.component.html',
  styleUrls: ['./freight-order-form.component.css']
})
export class FreightOrderFormComponent implements OnInit {
  freightOrderForm: FormGroup;
  isUpdate: boolean;
  private freightOrderId: number;

  constructor(
    private freightOrderApi: FreightOrderApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.freightOrderId = +this.activatedRoute.snapshot.paramMap.get(
      'freightOrderId'
    );

    if (this.freightOrderId) {
      this.isUpdate = true;
      this.freightOrderApi
        .getFreightOrderById(this.freightOrderId)
        .subscribe((data: FreightOrderViewModel) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.freightOrderForm = this.formBuilder.group({
      OperationId: ['', Validators.required],
      VehicleId: ['', Validators.required],
      TrailorId: [''],
      CargoType: ['', Validators.required],
      Weight: ['', Validators.required],
      Distance: ['', Validators.required],
      Price: ['', Validators.required],
      DriverCost: ['', Validators.required],
      ArrShipper: [''],
      LoadingCompleted: [''],
      ArrConsignee: [''],
      UnloadingCompleted: [''],
      Status: ['', Validators.required],
      ShippedBy: [''],
      ConsigneeBy: [''],
      DriverId: ['', Validators.required],
      DispatchCompletedOn: [''],
      FreightOrderNo: ['', Validators.required],
      WayBillNo: [''],
      DispatcherName: []
    });
  }

  private initializeForm(freightOrder: FreightOrderViewModel): void {
    this.freightOrderForm.patchValue(freightOrder);
  }

  getFormControl(control: string): FormControl {
    return this.freightOrderForm.get(control) as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData(this.freightOrderForm);

    if (this.isUpdate && formData) {
      this.freightOrderApi
        .updateFreightOrder(formData)
        .subscribe(
          () => alert('Freight order updated successfully'),
          (error: HttpErrorResponse) =>
            alert('Unable to update freight order try again later')
        );
    } else if (formData) {
      this.freightOrderApi.createFreightOrder(formData).subscribe(
        (data: FreightOrderViewModel) => {
          this.freightOrderForm.reset();
          alert('Freight order created successfuly');
        },
        (error: HttpErrorResponse) =>
          alert('Unable to create freight order, try again later')
      );
    }
  }

  prepareFormData(form: FormGroup): FreightOrder | null {
    if (form.valid) {
      const freightOrder: FreightOrder = this.freightOrderForm.value;

      if (this.freightOrderId) {
        freightOrder.Id = this.freightOrderId;
      }

      return freightOrder;
    } else {
      return null;
    }
  }
}
