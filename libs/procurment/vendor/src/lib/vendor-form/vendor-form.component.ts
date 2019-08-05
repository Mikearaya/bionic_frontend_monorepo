import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { NotificationComponent } from '@bionic/components/notification';
import {
  VendorApiService,
  VendorViewModel,
  Vendor
} from '@bionic/apis/procurment/vendor-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;
  public isUpdate: Boolean;
  public errorMessages: any[];
  public created: Boolean;
  public vendorForm: FormGroup;
  public title: string;
  public submitButtonText: string;
  public fields: Object = { text: 'text', value: 'headerStyle' };
  public height: String = '220px';
  public value: String = 'default';

  public vendorId: number;
  @ViewChild('element') tabObj: TabComponent;

  @ViewChild('headerStyles') listObj: TabComponent;
  public headerText: Object[] = [
    { Id: 'header1', headerStyle: 'fill', text: 'General' },
    { Id: 'header2', headerStyle: 'fill', text: 'Purchase Terms' }
  ];

  constructor(
    private vendorApi: VendorApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.vendorId = +this.activatedRoute.snapshot.paramMap.get('vendorId');

    this.isUpdate = false;
    this.title = 'Create New Vendor';
    this.submitButtonText = 'Save';
    if (this.vendorId) {
      this.isUpdate = true;
      this.title = `Update Vendor #${this.vendorId}`;
      this.submitButtonText = 'Update';

      this.vendorApi
        .getVendorById(this.vendorId)
        .subscribe((data: VendorViewModel) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.vendorForm = this.formBuilder.group({
      Name: ['', Validators.required],
      PhoneNumber: [''],
      TinNumber: [''],
      LeadTime: [''],
      PaymentPeriod: ['']
    });
  }

  private initializeForm(vendor: VendorViewModel): void {
    this.vendorForm.patchValue(vendor);
  }

  get vendorName(): FormControl {
    return this.vendorForm.get('Name') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.vendorForm.get('PhoneNumber') as FormControl;
  }

  get tinNumber(): FormControl {
    return this.vendorForm.get('TinNumber') as FormControl;
  }

  get leadTime(): FormControl {
    return this.vendorForm.get('LeadTime') as FormControl;
  }

  get paymentPeriod(): FormControl {
    return this.vendorForm.get('PaymentPeriod') as FormControl;
  }

  onSubmit(): void {
    const vendor = this.prepareFormData();

    if (vendor && this.isUpdate) {
      this.vendorApi
        .updateVendor(vendor)
        .subscribe(
          () => this.notification.showMessage('Vendor Updated Successfuly'),
          (error: HttpErrorResponse) =>
            this.notification.showMessage(
              'Unable to update vendor successfuly, try again later',
              'error'
            )
        );
    } else {
      this.vendorApi.createVendor(vendor).subscribe(
        (data: VendorViewModel) => {
          this.created = true;
          this.vendorId = data.id;
          this.notification.showMessage('Vendor Created Successfuly');
        },
        (error: HttpErrorResponse) =>
          this.notification.showMessage(
            'Unable to save vendor successfuly, try again later',
            'error'
          )
      );
    }
  }

  private prepareFormData(): Vendor | null {
    if (this.vendorForm.invalid) {
      return null;
    }

    const vendor: Vendor = {
      name: this.vendorName.value,
      phoneNumber: this.phoneNumber.value,
      tinNumber: this.tinNumber.value,
      leadTime: this.leadTime.value,
      paymentPeriod: this.paymentPeriod.value
    };
    if (this.vendorId) {
      vendor.id = this.vendorId;
    }

    return vendor;
  }
}
