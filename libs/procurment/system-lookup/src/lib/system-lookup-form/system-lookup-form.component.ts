import {
  Component,
  OnInit,
  ViewChild,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import {
  SystemLookupApiService,
  SystemLookupCategoriesModel,
  LookupViewModel,
  LookupModel
} from '@bionic/apis/common/system-lookup-api';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { NotificationComponent } from '@bionic/components/notification';

@Component({
  templateUrl: './system-lookup-form.component.html',
  styleUrls: ['./system-lookup-form.component.css']
})
export class SystemLookupFormComponent implements OnInit, OnChanges {
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
        .subscribe((data: LookupViewModel) => {this.lookup = data;
        console.log("lookup retured", data);
        }
        );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
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
