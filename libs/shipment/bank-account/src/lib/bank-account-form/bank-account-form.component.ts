import { Component, OnInit } from '@angular/core';
import {
  BankAccountApiService,
  BankAccountView,
  BankAccount
} from '@bionic/apis/shipment/bank-account-api';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css']
})
export class BankAccountFormComponent implements OnInit {
  bankAccountForm: FormGroup;
  bankId: number;
  isUpdate: boolean;

  constructor(
    private bankAccountApi: BankAccountApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.bankId = +this.activatedRoute.snapshot.paramMap.get('bankId');

    if (this.bankId) {
      this.isUpdate = true;

      this.bankAccountApi
        .getBankAccountById(this.bankId)
        .subscribe((data: BankAccountView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.bankAccountForm = this.formBuilder.group({
      BankName: ['', Validators.required],
      AccountNumber: ['', Validators.required]
    });
  }

  private initializeForm(bank: BankAccountView): void {
    this.bankAccountForm = this.formBuilder.group({
      Id: [bank.Id, Validators.required],
      BankName: [bank.BankName, Validators.required],
      AccountNumber: [bank.AccountNumber, Validators.required]
    });
  }

  getControl(control: string): FormControl {
    return this.bankAccountForm.get(control) as FormControl;
  }

  onSubmit(): void {
    const bankData = this.prepareFormData(this.bankAccountForm);

    if (bankData && this.isUpdate) {
      this.bankAccountApi
        .updateBankAccount(bankData)
        .subscribe(
          () => alert('Bank Account Updated Successfuly'),
          (error: HttpErrorResponse) =>
            alert('Unable to Update bank account, Try Again Later')
        );
    } else if (bankData) {
      this.bankAccountApi.createBankAccount(bankData).subscribe(
        (data: BankAccountView) => {
          alert('Bank Account created successfuly');
          this.bankAccountForm.reset();
        },
        (error: HttpErrorResponse) =>
          alert('Unable to add new bank account, try again later')
      );
    }
  }

  private prepareFormData(form: FormGroup): BankAccount | null {
    if (form.valid) {
      const bank: BankAccount = {
        BankName: this.getControl('BankName').value,
        AccountNumber: this.getControl('AccountNumber').value
      };

      if (this.isUpdate) {
        bank.Id = this.bankId;
      }
      return bank;
    } else {
      return null;
    }
  }
}
