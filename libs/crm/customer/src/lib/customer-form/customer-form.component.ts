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
import { Customer, CustomerApiService } from '@bionic/apis/crm/customer-api';
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
    private location: Location,
    private router: Router
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
      TinNo: [''],
      Email: ['', [Validators.email]],
      TaxRate: [''],
      PaymentPeriod: [''],
      CreditLimit: [''],
      Fax: [''],
      PoBox: [''],
      Telephones: this.formBuilder.array([]),
      SocialMedias: this.formBuilder.array([]),
      Addresses: this.formBuilder.array([])
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
    return this.customerForm.get('TinNo') as FormControl;
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
    return this.customerForm.get('Telephones') as FormArray;
  }

  get addresses(): FormArray {
    return this.customerForm.get('Addresses') as FormArray;
  }

  get socialMedias(): FormArray {
    return this.customerForm.get('SocialMedias') as FormArray;
  }

  private createTelephoneRecord(): FormGroup {
    return this.formBuilder.group({
      Id: [0],
      Type: ['', Validators.required],
      Number: ['', [Validators.min(10)]]
    });
  }

  private createSocialMedia(): FormGroup {
    return this.formBuilder.group({
      Id: [0],
      Address: ['', Validators.required],
      Site: ['', Validators.required]
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

  private initializeForm(customer: Customer): void {
    this.customerForm.patchValue(customer);
  }

  addPhone(): void {
    this.telephones.push(this.createTelephoneRecord());
  }

  deletePhone(index: number): void {
    if (this.telephones.controls[index].value.id !== 0) {
      this.customerService
        .deleteCustomerPhone(
          this.customerId,
          this.telephones.controls[index].value.id
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
    if (this.socialMedias.controls[index].value.id !== 0) {
      this.customerService
        .deleteCustomerSocialMediaAddress(
          this.customerId,
          this.socialMedias.controls[index].value.id
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
    const formModel = this.customerForm.value;
    const dataModel: Customer = {
      Id: this.customerId,
      FullName: formModel.FullName,
      Type: formModel.Type,
      Fax: formModel.Fax,
      Tin: formModel.TinNo,
      PoBox: formModel.PoBox,
      CreditLimit: formModel.CreditLimit,
      PaymentPeriod: formModel.PaymentPeriod,
      Email: formModel.Email,
      Addresses: [],
      Telephones: [],
      SocialMedias: []
    };

    this.addresses.controls.forEach(element => {
      dataModel.Addresses.push({
        Id: element.value.Id,
        City: element.value.City,
        Country: element.value.Country,
        SubCity: element.value.SubCity,
        Location: element.value.Location
      });
    });

    this.socialMedias.controls.forEach(element => {
      dataModel.SocialMedias.push({
        Id: element.value.Id,
        Site: element.value.Site,
        Address: element.value.Address
      });
    });

    this.telephones.controls.forEach(element => {
      dataModel.Telephones.push({
        Id: element.value.Id,
        Type: element.value.Type,
        Number: element.value.Number
      });
    });

    return dataModel;
  }

  onSubmit() {
    this.customer = this.prepareDataModel();
    console.log(`${this.customer}`);
    if (this.isUpdate) {
      this.customerService.updateCustomer(this.customer).subscribe(
        () => {
          this.notification.showMessage(
            'Customer Record Updated Successfuly',
            'success'
          );
          this.location.back();
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
          this.notification.showMessage(
            'Customer Created Successfuly',
            'success'
          );
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
    if (this.addresses.controls[index].value.id !== 0) {
      this.customerService
        .deleteCustomerAddress(
          this.customerId,
          this.addresses.controls[index].value.id
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
