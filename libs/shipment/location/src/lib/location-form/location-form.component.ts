import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LocationApiService,
  LocationViewModel
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
        this.locationApi.deleteLocation(id.value).subscribe(
          () => {
            this.location.back();
            alert('lookup deleted successfuly');
          },
          () =>
            alert(
              'Unknown error occured while attempting to delete system lookup'
            )
        );
      }
    } else {
      this.Locations.removeAt(index);
    }
  }

  onSubmit() {
    // check if  current operation is update
    if (!this.isUpdate) {
      console.log(this.locationForm.value);
      this.locationApi.createLocation(this.locationForm.value).subscribe(
        success => {
          alert('Locations Created Successfully');
          this.location.back(); // on success return back to where the user previously was
        },
        (error: HttpErrorResponse) => {
          alert(error.message); // on error show the error message
        }
      );
    } else {
      this.locationApi.updateLocation(this.locationForm.value).subscribe(
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

  addRow(): void {
    this.Locations.push(
      this.formBuilder.group({
        IsLocal: ['', Validators.required],
        LocationName: ['', Validators.required],
        Country: ['']
      })
    );
  }
}
