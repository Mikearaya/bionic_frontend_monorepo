import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from '@bionic/components/notification';
import {
  SystemLookupApiService,
  LookupModel,
  LookupViewModel
} from '@bionic/apis/common/system-lookup-api';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  template: `
    <bionic-system-lookup-form
      (submitted)="onSubmit($event)"
      [lookup]="lookup"
    ></bionic-system-lookup-form>
    <bionic-notification #notification></bionic-notification>
  `,
  styleUrls: ['./system-lookup-form.component.css']
})
export class SystemLookupFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  isUpdate: boolean;
  private lookupId: number;
  lookup: LookupModel;

  constructor(
    private lookupApi: SystemLookupApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.lookupId = +this.activatedRoute.snapshot.paramMap.get('lookupId');

    if (this.lookupId) {
      // if lookup id is present get the related account value
      this.isUpdate = true;
      // initialize the form with the retrived lookup value
      this.lookupApi
        .getLookupId(this.lookupId)
        .subscribe((data: LookupViewModel) => (this.lookup = data));
    }
  }

  onSubmit(formData: LookupModel[]) {
    if (!this.isUpdate && formData) {
      this.lookupApi.createLookup(formData).subscribe(
        success => {
          this.notification.showMessage('Lookup Created Successfully');
          this.location.back(); // on success return back to where the user previously was
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Unable to save system lookup, try again later',
            'error'
          );
        }
      );
    } else if (formData) {
      this.lookupApi.updateLookup(formData).subscribe(
        () => {
          this.notification.showMessage(
            'Account catagory Updated Successfully'
          ); // on success return back to where the user previously was
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Unable to update system lookup, try again later',
            'error'
          );
        }
      );
    }
  }
}
