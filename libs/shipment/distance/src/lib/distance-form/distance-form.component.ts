import { Component, OnInit } from '@angular/core';
import {
  DistanceApiService,
  DistanceViewModel,
  DistancetDtoModel,
  DistanceModel
} from '@bionic/apis/shipment/distance-api';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-distance-form',
  templateUrl: './distance-form.component.html',
  styleUrls: ['./distance-form.component.css']
})
export class DistanceFormComponent implements OnInit {
  distanceForm: FormGroup;
  isUpdate: boolean;
  private distanceId: number;

  constructor(
    private distanceApi: DistanceApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.distanceId = +this.activatedRoute.snapshot.paramMap.get('distanceId');

    if (this.distanceId) {
      this.distanceApi
        .getDistanceById(this.distanceId)
        .subscribe((data: DistanceViewModel) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.distanceForm = this.formBuilder.group({
      Distances: this.formBuilder.array([this.addRow()])
    });
  }

  private initializeForm(distance: DistanceViewModel): void {
    this.distanceForm = this.formBuilder.group({
      Distances: this.formBuilder.array([
        this.formBuilder.group({
          Id: [distance.Id, Validators.required],
          FromLocation: [distance.FromId, Validators.required],
          ToLocation: [distance.ToId, Validators.required],
          Cost: [distance.Distance, Validators.required]
        })
      ])
    });
  }

  get Distances(): FormArray {
    return this.distanceForm.get('Distances') as FormArray;
  }

  addRow(): FormGroup {
    return this.formBuilder.group({
      FromLocation: ['', Validators.required],
      ToLocation: ['', Validators.required],
      Cost: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.isUpdate) {
      const formData = this.prepareUpdateData();

      if (formData) {
        this.distanceApi.updateDistance(formData).subscribe(
          () => {
            alert('Distance Updated Successfuly');
          },
          (error: HttpErrorResponse) =>
            alert('Unable to Update Distance, Try Again Later')
        );
      }
    } else {
      const formData = this.prepareCreateForm();

      if (formData) {
        this.distanceApi.createDistance(formData).subscribe(
          () => {
            alert('Distance Saved Successfuly');
            this.distanceForm.reset();
          },
          (error: HttpErrorResponse) =>
            alert('Unable to Save Distance, Try Again Later')
        );
      }
    }
  }

  private prepareUpdateData(): DistanceModel | null {
    if (this.distanceForm.valid) {
      const distance: DistanceModel = {
        FromLocation: this.Distances.controls[0].get('FromLocation').value,
        ToLocation: this.Distances.controls[0].get('ToLocation').value,
        Cost: this.Distances.controls[0].get('Cost').value
      };

      return distance;
    } else {
      return null;
    }
  }

  private prepareCreateForm(): DistancetDtoModel | null {
    if (this.distanceForm.valid) {
      const distance: DistancetDtoModel = new DistancetDtoModel();

      this.Distances.controls.forEach(element => {
        distance.Distances.push({
          FromLocation: element.get('FromLocation').value,
          ToLocation: element.get('ToLocation').value,
          Cost: element.get('Cost').value
        });
      });

      return distance;
    } else {
      return null;
    }
  }

  removeRow(index: number): void {
    this.Distances.removeAt(index);
  }
}
