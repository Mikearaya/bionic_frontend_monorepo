import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  UnitOfMeasurmentView,
  UnitOfMeasurmentsApiService,
  UnitOfMeasurement
} from '@bionic/apis/inventory/unit-of-measurments-api';
import { NotificationComponent } from '@bionic/components/notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-unit-of-measurment-form',
  templateUrl: './unit-of-measurment-form.component.html',
  styleUrls: ['./unit-of-measurment-form.component.css']
})
export class UnitOfMeasurmentFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;
  private uomId: number;

  public isUpdate: Boolean;

  public uomForm: FormGroup;
  constructor(
    private unitOfMeasureApi: UnitOfMeasurmentsApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.uomId = +this.activatedRoute.snapshot.paramMap.get('uomId');

    if (this.uomId) {
      this.isUpdate = true;

      this.unitOfMeasureApi
        .getAllUnitOfMeasureById(this.uomId)
        .subscribe((data: UnitOfMeasurmentView) => this.initializaForm(data));
    } else {
      this.isUpdate = false;
    }
  }

  private createForm(): void {
    this.uomForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Abbrevation: ['', Validators.required],
      Active: [true, Validators.required]
    });
  }

  get name(): FormControl {
    return this.uomForm.get('Name') as FormControl;
  }

  get abbrevation(): FormControl {
    return this.uomForm.get('Abbrevation') as FormControl;
  }

  get isActive(): FormControl {
    return this.uomForm.get('Active') as FormControl;
  }

  private initializaForm(uom: UnitOfMeasurmentView): void {
    this.uomForm.patchValue(uom);
  }

  onSubmit(): void {
    if (this.uomForm.valid) {
      const uom = this.prepareFormData(this.uomForm.value);

      if (!this.isUpdate) {
        this.unitOfMeasureApi.saveUnitOfMeasurment(uom).subscribe(
          () => {
            this.notification.showMessage('Unit of Measurement Created!!!');
            this.location.back();
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Faild to create Unit of Measurement!!!',
              'error'
            );
          }
        );
      } else {
        this.unitOfMeasureApi.updateUnitOfMeasurment(uom).subscribe(
          () => {
            this.notification.showMessage('Unit of Measurement Updated!!!');
            this.location.back();
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Faild to Update Unit of Measurement!!!',
              'error'
            );
          }
        );
      }
    }
  }

  private prepareFormData(formData: any): UnitOfMeasurement {
    return {
      Id: this.uomId ? this.uomId : 0,
      Name: this.name.value,
      Abbrivation: this.abbrevation.value,
      Active: this.isActive.value
    };
  }
}
