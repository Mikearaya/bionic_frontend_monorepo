import { Component, OnInit } from '@angular/core';
import {
  VehicleOwnersApiService,
  VehicleOwner,
  VehicleOwnerViewModel
} from '@bionic/apis/rent/vehicle-owners-api';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-vehicle-owner-form',
  templateUrl: './vehicle-owner-form.component.html',
  styleUrls: ['./vehicle-owner-form.component.css']
})
export class VehicleOwnerFormComponent implements OnInit {
  vehicleOwnerForm: FormGroup;
  isUpdate: boolean;
  private vehicleOwnerId: number;

  constructor(
    private vehicleOwnerApi: VehicleOwnersApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.vehicleOwnerId = +this.activatedRoute.snapshot.paramMap.get('ownerId');

    if (this.vehicleOwnerId) {
      this.isUpdate = true;
      this.vehicleOwnerApi
        .getVehicleOwnerById(this.vehicleOwnerId)
        .subscribe((owner: VehicleOwnerViewModel) =>
          this.initializeForm(owner)
        );
    }
  }

  private createForm(): void {
    this.vehicleOwnerForm = this.formBuilder.group({
      PartnerName: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      City: [''],
      SubCity: [''],
      Wereda: [''],
      HouseNumber: ['']
    });
  }

  private initializeForm(owner: VehicleOwnerViewModel): void {
    this.vehicleOwnerForm = this.formBuilder.group({
      Id: [owner.Id, Validators.required],
      PartnerName: [owner.PartnerName, Validators.required],
      MobileNumber: [owner.MobileNumber, Validators.required],
      City: [owner.City],
      SubCity: [owner.SubCity],
      Wereda: [owner.Wereda],
      HouseNumber: [owner.HouseNumber]
    });
  }

  get PartnerName(): FormControl {
    return this.vehicleOwnerForm.get('PartnerName') as FormControl;
  }
  get MobileNumber(): FormControl {
    return this.vehicleOwnerForm.get('MobileNumber') as FormControl;
  }

  get City(): FormControl {
    return this.vehicleOwnerForm.get('City') as FormControl;
  }

  get SubCity(): FormControl {
    return this.vehicleOwnerForm.get('SubCity') as FormControl;
  }
  get Wereda(): FormControl {
    return this.vehicleOwnerForm.get('Wereda') as FormControl;
  }

  get HouseNumber(): FormControl {
    return this.vehicleOwnerForm.get('HouseNumber') as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData(this.vehicleOwnerForm);

    if (this.isUpdate && formData) {
      this.vehicleOwnerApi
        .updateVehicleOwner(formData)
        .subscribe(
          () => alert('Partner Information Updated Successfuly'),
          (error: HttpErrorResponse) =>
            alert(
              'Something wrong happedned while updating partner information, try again '
            )
        );
    } else if (formData) {
      this.vehicleOwnerApi.addVehicleOwner(formData).subscribe(
        (owner: VehicleOwnerViewModel) => {
          alert('Partner Information Saved Successfuly');
          this.vehicleOwnerForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(
            'Something wrong happedned while saving partner information, try again'
          );
        }
      );
    } else {
      alert('unable to complete request try again later');
    }
  }

  private prepareFormData(form: FormGroup): VehicleOwner | null {
    if (form.valid) {
      const owner: VehicleOwner = {
        PartnerName: this.PartnerName.value,
        MobileNumber: this.MobileNumber.value,
        City: this.City.value,
        SubCity: this.SubCity.value,
        Wereda: this.Wereda.value,
        HouseNumber: this.HouseNumber.value
      };

      if (this.vehicleOwnerId) {
        owner.Id = this.vehicleOwnerId;
      }

      return owner;
    } else {
      return null;
    }
  }
}
