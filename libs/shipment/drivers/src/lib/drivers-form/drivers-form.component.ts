import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  DriversApiService,
  DriversViewModel,
  DriverModel
} from '@bionic/apis/shipment/drivers-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-drivers-form',
  templateUrl: './drivers-form.component.html',
  styleUrls: ['./drivers-form.component.css']
})
export class DriversFormComponent implements OnInit {
  driverForm: FormGroup;
  isUpdate: boolean;
  private driverId: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private driversApi: DriversApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.driverId = +this.activatedRoute.snapshot.paramMap.get('driverId');

    if (this.driverId) {
      this.isUpdate = true;
      this.driversApi
        .getDriverById(this.driverId)
        .subscribe((data: DriversViewModel) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.driverForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      DrivingLicenseId: ['', Validators.required]
    });
  }

  private initializeForm(driver: DriversViewModel): void {
    this.driverForm = this.formBuilder.group({
      Id: [driver.Id, Validators.required],
      FullName: [driver.FullName, Validators.required],
      DrivingLicenseId: [driver.DrivingLicenseId, Validators.required]
    });
  }

  get FullName(): FormControl {
    return this.driverForm.get('FullName') as FormControl;
  }

  get DrivingLicenseId(): FormControl {
    return this.driverForm.get('DrivingLicenseId') as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData(this.driverForm);

    if (formData && this.isUpdate) {
      this.driversApi
        .updateDriver(formData)
        .subscribe(
          () => alert('Driver updated Successfuly'),
          (error: HttpErrorResponse) =>
            alert('Unable to update driver please try again later')
        );
    } else if (formData) {
      this.driversApi
        .createDriver(formData)
        .subscribe(
          () => alert('Driver Added Successfuly'),
          (error: HttpErrorResponse) =>
            alert('Unable to Add driver please try again later')
        );
    }
  }

  private prepareFormData(form: FormGroup): DriverModel | null {
    if (form.valid) {
      const driver: DriverModel = {
        FullName: this.FullName.value,
        DrivingLicenseId: this.DrivingLicenseId.value
      };

      if (this.driverId) {
        driver.Id = this.driverId;
      }

      return driver;
    } else {
      return null;
    }
  }
}
