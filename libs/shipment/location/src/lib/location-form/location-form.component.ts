import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LocationApiService,
  LocationViewModel,
  LocationModel,
  LocationModelDto
} from '@bionic/apis/shipment/location-api';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  public locationForm: FormGroup;
  public isUpdate = false;
  public locationId: any;
  public lookupFields: { value: string; text: string };
  private deletedIds: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private locationApi: LocationApiService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.locationId = this.activatedRoute.snapshot.paramMap.get('locationId');

    if (this.locationId) {
      this.isUpdate = true;

      this.locationApi
        .getLocationById(this.locationId)
        .subscribe((data: LocationViewModel) => this.initializeLookup(data));
    }
  }

  get Locations(): FormArray {
    return this.locationForm.get('Locations') as FormArray;
  }

  private createForm() {
    this.locationForm = this.formBuilder.group({
      Locations: this.formBuilder.array([
        this.formBuilder.group({
          IsLocal: [''],
          LocationName: ['', Validators.required],
          Country: ['']
        })
      ])
    });
  }

  initializeLookup(data: LocationViewModel) {
    this.locationForm = this.formBuilder.group({
      Locations: this.formBuilder.array([
        this.formBuilder.group({
          Id: [data.Id, Validators.required],
          IsLocal: [data.IsLocal],
          LocationName: [data.LocationName, Validators.required],
          Country: [data.Country]
        })
      ])
    });
  }

  removeRow(index: number): void {
    const id = this.Locations.controls[index].get('Id');
    if (id) {
      const confirmation = confirm('Are you sure you want to delete this item');

      if (confirmation) {
        this.deletedIds.push(id.value);
        this.Locations.removeAt(index);
      }
    } else {
      this.Locations.removeAt(index);
    }
  }

  onSubmit() {
    // check if  current operation is update

    const formData = this.prepareFormData(this.locationForm);

    if (!this.isUpdate && formData) {
      this.locationApi.createLocation(formData).subscribe(
        success => {
          alert('Locations Created Successfully');
          this.location.back(); // on success return back to where the user previously was
        },
        (error: HttpErrorResponse) => {
          alert(error.message); // on error show the error message
        }
      );
    } else if (formData) {
      this.locationApi.updateLocation(formData).subscribe(
        () => {
          alert('Locations Updated Successfully'); // on success return back to where the user previously was
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          alert(error.message); // on error show the error message
        }
      );
    }
  }

  private prepareFormData(form: FormGroup): LocationModelDto | null {
    if (form.valid) {
      const locations: LocationModelDto = new LocationModelDto();
      this.Locations.controls.forEach(element => {
        const location: LocationModel = {
          LocationName: element.get('LocationName').value,
          Country: element.get('Country').value,
          IsLocal: element.get('IsLocal').value ? 1 : 0
        };

        if (element.get('Id')) {
          location.Id = element.get('Id').value;
        }
        locations.Locations.push(location);
      });

      locations.DeletedIds = this.deletedIds;

      return locations;
    } else {
      return null;
    }
  }

  addRow(): void {
    this.Locations.push(
      this.formBuilder.group({
        IsLocal: [false, Validators.required],
        LocationName: ['', Validators.required],
        Country: ['']
      })
    );
  }
}
