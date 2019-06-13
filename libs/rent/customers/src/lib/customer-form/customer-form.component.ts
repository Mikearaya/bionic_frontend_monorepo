import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  CustomersApiService,
  Customer,
  CustomerViewModel
} from '@bionic/apis/rent/customer-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  isUpdate: boolean;

  private customerId: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private customerApi: CustomersApiService
  ) {}

  ngOnInit() {
    this.customerId = +this.activatedRoute.snapshot.paramMap.get('customerId');

    if (this.customerId) {
      this.isUpdate = true;
      this.customerApi
        .getCustomerById(this.customerId)
        .subscribe(
          (customer: CustomerViewModel) => this.initializeForm(customer),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }
  }

  createForm(): void {
    this.customerForm = this.formBuilder.group({
      CustomerName: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      OtherPhone: [''],
      HouseNo: ['', Validators.required],
      Country: ['', Validators.required],
      City: ['', Validators.required],
      Nationality: ['Ethiopian', Validators.required],
      HotelPhone: ['', Validators.required],
      HotelName: ['', Validators.required],
      DrivingLicenceId: ['', Validators.required],
      PassportNumber: ['']
    });
  }

  initializeForm(customer: CustomerViewModel): void {
    this.customerForm = this.formBuilder.group({
      Id: [customer.Id, Validators.required],
      CustomerName: [customer.CustomerName, Validators.required],
      MobileNumber: [customer.MobileNumber, Validators.required],
      OtherPhone: [customer.OtherPhone],
      HouseNo: [customer.HouseNo, Validators.required],
      Country: [customer.Country, Validators.required],
      City: [customer.City, Validators.required],
      Nationality: [customer.Country, Validators.required],
      HotelPhone: [customer.HotelPhone, Validators.required],
      HotelName: [customer.HotelName, Validators.required],
      DrivingLicenceId: [customer.DrivingLicenceId, Validators.required],
      PassportNumber: [customer.PassportNumber]
    });
  }

  get CustomerName(): FormControl {
    return this.customerForm.get('CustomerName') as FormControl;
  }

  get MobileNumber(): FormControl {
    return this.customerForm.get('MobileNumber') as FormControl;
  }
  get OtherPhone(): FormControl {
    return this.customerForm.get('OtherPhone') as FormControl;
  }

  get HouseNo(): FormControl {
    return this.customerForm.get('HouseNo') as FormControl;
  }

  get Country(): FormControl {
    return this.customerForm.get('Country') as FormControl;
  }

  get City(): FormControl {
    return this.customerForm.get('City') as FormControl;
  }

  get Nationality(): FormControl {
    return this.customerForm.get('Nationality') as FormControl;
  }

  get HotelName(): FormControl {
    return this.customerForm.get('HotelName') as FormControl;
  }
  get HotelPhone(): FormControl {
    return this.customerForm.get('HotelPhone') as FormControl;
  }
  get DrivingLicenceId(): FormControl {
    return this.customerForm.get('DrivingLicenceId') as FormControl;
  }

  get PassportNumber(): FormControl {
    return this.customerForm.get('PassportNumber') as FormControl;
  }

  onSubmit(): void {}
}
