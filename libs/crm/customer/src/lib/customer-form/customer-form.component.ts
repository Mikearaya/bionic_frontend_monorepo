import { Location } from '@angular/common';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationComponent } from '@bionic/components/notification';
import {
  Customer,
  CustomerApiService,
  CustomerAddress,
  CustomerSocialMediaAddress,
  CustomerTelephoneAddress
} from '@bionic/apis/crm/customer-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @ViewChild('notification')
  private notification: NotificationComponent;
  public customerTypes = ['Individual', 'Business'];
  public phoneTypes = ['Office', 'Mobile'];
  public socialMediaList = [
    'Facebook',
    'Twitter',
    'LinkedIn',
    'Instagram',
    'Skype'
  ];
  public countriesList = ['Ethiopia', 'Kenya', 'Sudan'];

  customerForm: FormGroup;
  isUpdate: Boolean = false;
  customerId: number;
  private customer: Customer;

  errorMessages: any;
  errors: any;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.generateForm();
  }

  ngOnInit() {
    this.customerId = +this.activatedRoute.snapshot.paramMap.get('customerId');
    if (this.customerId) {
      this.isUpdate = true;
      this.customerService
        .getCustomerById(this.customerId)
        .subscribe((customer: Customer) => this.initializeForm(customer));
    }
  }

  private generateForm() {
    this.customerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Type: ['', Validators.required],
      Tin: [''],
      Email: ['', [Validators.email]],
      TaxRate: [''],
      PaymentPeriod: [''],
      CreditLimit: [''],
      Fax: [''],
      PoBox: [''],
      PhoneNumber: this.formBuilder.array([]),
      SocialMedia: this.formBuilder.array([]),
      Address: this.formBuilder.array([])
    });
  }
  get fullName(): FormControl {
    return this.customerForm.get('FullName') as FormControl;
  }

  get email(): FormControl {
    return this.customerForm.get('Email') as FormControl;
  }

  get type(): FormControl {
    return this.customerForm.get('Type') as FormControl;
  }

  get tinNo(): FormControl {
    return this.customerForm.get('Tin') as FormControl;
  }
  get taxRate(): FormControl {
    return this.customerForm.get('TaxRate') as FormControl;
  }

  get paymentPeriod(): FormControl {
    return this.customerForm.get('PaymentPeriod') as FormControl;
  }
  get creditLimit(): FormControl {
    return this.customerForm.get('CreditLimit') as FormControl;
  }

  get fax(): FormControl {
    return this.customerForm.get('Fax') as FormControl;
  }

  get poBox(): FormControl {
    return this.customerForm.get('PoBox') as FormControl;
  }

  get telephones(): FormArray {
    return this.customerForm.get('PhoneNumber') as FormArray;
  }

  get addresses(): FormArray {
    return this.customerForm.get('Address') as FormArray;
  }

  get socialMedias(): FormArray {
    return this.customerForm.get('SocialMedia') as FormArray;
  }

  private createTelephoneRecord(): FormGroup {
    return this.formBuilder.group({
      Id: [0],
      Type: ['', Validators.required],
      Number: ['', [Validators.min(10)]]
    });
  }

  private initializeTelephoneRecord(data: CustomerTelephoneAddress): FormGroup {
    return this.formBuilder.group({
      Id: [data.Id],
      Type: [data.Type, Validators.required],
      Number: [data.Number, [Validators.min(10)]]
    });
  }

  private createSocialMedia(): FormGroup {
    return this.formBuilder.group({
      Id: [0],
      Address: ['', Validators.required],
      Site: ['', Validators.required]
    });
  }

  private initializeSocialMedia(data: CustomerSocialMediaAddress): FormGroup {
    return this.formBuilder.group({
      Id: [data.Id],
      Address: [data.Address, Validators.required],
      Site: [data.Site, Validators.required]
    });
  }

  private createAddress(): FormGroup {
    return this.formBuilder.group({
      Id: [0],
      Location: ['', Validators.required],
      City: ['', Validators.required],
      SubCity: ['', Validators.required],
      Country: ['', Validators.required],
      PhoneNumber: ['', [Validators.min(10), Validators.max(12)]]
    });
  }

  private initializeAddress(data: CustomerAddress): FormGroup {
    return this.formBuilder.group({
      Id: [data.Id],
      Location: [data.Location, Validators.required],
      City: [data.City, Validators.required],
      SubCity: [data.SubCity, Validators.required],
      Country: [data.Country, Validators.required],
      PhoneNumber: [data.PhoneNumber, [Validators.min(10), Validators.max(12)]]
    });
  }

  private initializeForm(customer: Customer): void {
    this.customerForm.patchValue(customer);
    if (customer.SocialMedia.length > 0) {
      customer.SocialMedia.forEach(e => {
        this.socialMedias.controls.push(this.initializeSocialMedia(e));
      });
    }

    if (customer.PhoneNumber.length > 0) {
      customer.PhoneNumber.forEach(e => {
        this.telephones.controls.push(this.initializeTelephoneRecord(e));
      });
    }

    if (customer.Address.length > 0) {
      customer.Address.forEach(e => {
        this.addresses.controls.push(this.initializeAddress(e));
      });
    }
  }

  addPhone(): void {
    this.telephones.push(this.createTelephoneRecord());
  }

  deletePhone(index: number): void {
    if (this.telephones.controls[index].value.Id !== 0) {
      this.customerService
        .deleteCustomerPhone(
          this.customerId,
          this.telephones.controls[index].value.Id
        )
        .subscribe(
          () => this.notification.showMessage('Phone Number Deleted'),
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Failed deleting Phone Number',
              'error'
            );
          },
          () => this.telephones.removeAt(index)
        );
    } else {
      this.telephones.removeAt(index);
    }
  }

  addSocialAddress(): void {
    this.socialMedias.push(this.createSocialMedia());
  }

  deleteSocialAddress(index: number): void {
    if (this.socialMedias.controls[index].value.Id !== 0) {
      this.customerService
        .deleteCustomerSocialMediaAddress(
          this.customerId,
          this.socialMedias.controls[index].value.Id
        )
        .subscribe(
          () => this.notification.showMessage('Social Media Account Deleted'),
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Failed deleting Social Media Account',
              'error'
            );
          },
          () => this.socialMedias.removeAt(index)
        );
    } else {
      this.socialMedias.removeAt(index);
    }
  }

  prepareDataModel(): Customer {
    const formModel = this.customerForm.value as Customer;
    return formModel;
  }

  onSubmit() {
    this.customer = this.prepareDataModel();
    if (this.isUpdate) {
      this.customerService
        .updateCustomer(this.customerId, this.customer)
        .subscribe(
          () => {
            this.notification.showMessage(
              'Customer Record Updated Successfuly'
            );
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Failed updating customer duplicate data exists',
              'error'
            );
          }
        );
    } else {
      this.customerService.addCustomer(this.customer).subscribe(
        () => {
          this.notification.showMessage('Customer Created Successfuly');
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage('Failed to Create Customer', 'error');
        }
      );
    }
  }

  addAddress(): void {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number): void {
    if (this.addresses.controls[index].value.Id !== 0) {
      this.customerService
        .deleteCustomerAddress(
          this.customerId,
          this.addresses.controls[index].value.Id
        )
        .subscribe(
          () => this.notification.showMessage('Address Deleted'),
          (error: HttpErrorResponse) => {
            this.notification.showMessage('Failed deleting Address', 'error');
          },
          () => this.addresses.removeAt(index)
        );
    } else {
      this.addresses.removeAt(index);
    }
  }
}
