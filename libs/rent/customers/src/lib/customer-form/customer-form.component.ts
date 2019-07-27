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
  ) {
    this.createForm();
  }

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
      HouseNo: [''],
      Country: [''],
      City: [''],
      Nationality: ['Ethiopian'],
      HotelPhone: [''],
      HotelName: [''],
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
      HouseNo: [customer.HouseNo],
      Country: [customer.Country],
      City: [customer.City],
      Nationality: [customer.Country],
      HotelPhone: [customer.HotelPhone],
      HotelName: [customer.HotelName],
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

  onSubmit(): void {
    const customerData = this.prepareData(this.customerForm);

    if (this.isUpdate && customerData) {
      this.customerApi
        .updateCustomer(customerData)
        .subscribe(
          () => alert('Customer updated successfuly'),
          (error: HttpErrorResponse) => alert(error.message)
        );
    } else if (customerData) {
      this.customerApi.addCustomer(customerData).subscribe(
        (customer: CustomerViewModel) => {
          this.customerForm.reset();
          alert('Customer added successfuly');
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
    }
  }

  private prepareData(form: FormGroup): Customer | null {
    if (form.valid) {
      const customer: Customer = {
        CustomerName: this.CustomerName.value,
        MobileNumber: this.MobileNumber.value,
        OtherPhone: this.OtherPhone.value,
        HouseNo: this.HouseNo.value,
        HotelName: this.HotelName.value,
        HotelPhone: this.HotelPhone.value,
        Country: this.Country.value,
        City: this.City.value,
        Nationality: this.Nationality.value,
        DrivingLicenceId: this.DrivingLicenceId.value,
        PassportNumber: this.PassportNumber.value
      };

      if (this.isUpdate) {
        customer.Id = this.customerId;
      }
      return customer;
    } else {
      return null;
    }
  }
}
