import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { NotificationComponent } from '@bionic/components/notification';
import {
  StorageLocationsApiService,
  StorageLocationView,
  StorageLocation
} from '@bionic/apis/inventory/storage-locations-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-storage-location-form',
  templateUrl: './storage-location-form.component.html',
  styleUrls: ['./storage-location-form.component.css']
})
export class StorageLocationFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;
  public storageForm: FormGroup;
  public isUpdate: Boolean;
  private storageId: number;

  constructor(
    private formBuilder: FormBuilder,
    private storageApi: StorageLocationsApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.storageId = +this.activatedRoute.snapshot.paramMap.get('storageId');

    if (this.storageId) {
      this.isUpdate = true;

      this.storageApi
        .getStorageLocationById(this.storageId)
        .subscribe((data: StorageLocationView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.storageForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Note: [''],
      Active: [true, Validators.required]
    });
  }

  private initializeForm(storage: StorageLocationView): void {
    this.storageForm.patchValue(storage);
  }

  get name(): FormControl {
    return this.storageForm.get('Name') as FormControl;
  }

  get note(): FormControl {
    return this.storageForm.get('Note') as FormControl;
  }

  get active(): FormControl {
    return this.storageForm.get('Active') as FormControl;
  }

  onSubmit(): void {
    const storage = this.prepareFormData();
    if (this.isUpdate && storage) {
      this.storageApi.updateStorageLocation(storage).subscribe(
        () => this.notification.showMessage('Storage Location Updated!'),
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Failed While Updating Storage Location Try Again',
            'error'
          );
        }
      );
    } else if (storage) {
      this.storageApi.createStorageLocation(storage).subscribe(
        () => {
          this.notification.showMessage('Storage Location Created!');
          this.storageForm.reset();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Failed While Creating Storage Location Try Again',
            'error'
          );
        }
      );
    }
  }

  prepareFormData(): StorageLocation {
    if (this.storageForm.valid) {
      const formData = this.storageForm.value;
      const storage: StorageLocation = {
        Name: this.name.value,
        Note: this.note.value,
        Active: this.active.value
      };

      if (this.storageId) {
        storage.Id = this.storageId;
      }

      return storage;
    } else {
      return null;
    }
  }
}
