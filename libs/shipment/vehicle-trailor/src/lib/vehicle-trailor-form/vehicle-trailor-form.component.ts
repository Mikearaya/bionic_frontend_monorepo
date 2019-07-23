import { Component, OnInit } from '@angular/core';
import {
  VehicleTrailorApiService,
  VehicleTrailorView,
  VehicleTrailor
} from '@bionic/apis/shipment/vehicle-trailor-api';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-vehicle-trailor-form',
  templateUrl: './vehicle-trailor-form.component.html',
  styleUrls: ['./vehicle-trailor-form.component.css']
})
export class VehicleTrailorFormComponent implements OnInit {
  trailorForm: FormGroup;
  isUpdate: boolean;
  trailorId: number;
  Years: any[] = [];

  constructor(
    private trailorApi: VehicleTrailorApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i > currentYear - 30; i--) {
      this.Years.push(i.toString());
    }
  }

  ngOnInit() {
    this.trailorId = +this.activatedRoute.snapshot.paramMap.get('trailorId');

    if (this.trailorId) {
      this.isUpdate = true;
      this.trailorApi
        .getVehicleTrailorById(this.trailorId)
        .subscribe((data: VehicleTrailorView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.trailorForm = this.formBuilder.group({
      Make: ['', Validators.required],
      YearMade: [''],
      Color: [''],
      PlateNumber: ['', Validators.required]
    });
  }

  private initializeForm(trailor: VehicleTrailorView): void {
    this.trailorForm = this.formBuilder.group({
      Id: [trailor.Id, Validators.required],
      Make: [trailor.Make, Validators.required],
      YearMade: [trailor.YearMade],
      Color: [trailor.ColorId],
      PlateNumber: [trailor.PlateNumber, Validators.required]
    });
  }

  getControl(control: string): FormControl {
    return this.trailorForm.get(control) as FormControl;
  }

  onSubmit(): void {
    const trailor = this.prepareFormData(this.trailorForm);

    if (trailor && this.isUpdate) {
      this.trailorApi.updateVehicleTrailor(trailor).subscribe(
        () => alert('Trailor Updated Successfuly'),
        (error: HttpErrorResponse) => {
          alert(
            'Error occured when attempting to update trailor data, try again later'
          );
        }
      );
    } else if (trailor) {
      this.trailorApi.createVehicleTrailor(trailor).subscribe(
        (data: VehicleTrailorView) => {
          alert('Vehicle Trailor Added Successfuly');
          this.trailorForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(
            'Error Occured when attempting to save trailor data, try again later'
          );
        }
      );
    }
  }

  private prepareFormData(form: FormGroup): VehicleTrailor | null {
    if (form.valid) {
      const trailor: VehicleTrailor = {
        Make: this.getControl('Make').value,
        YearMade: this.getControl('YearMade').value,
        Color: this.getControl('Color').value,
        PlateNumber: this.getControl('PlateNumber').value
      };

      if (this.trailorId) {
        trailor.Id = this.trailorId;
      }

      return trailor;
    } else {
      return null;
    }
  }
}
