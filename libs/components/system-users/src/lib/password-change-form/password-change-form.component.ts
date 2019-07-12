import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  SystemUserApiService,
  PasswordChangeModel
} from '@bionic/apis/common/system-users-api';

@Component({
  selector: 'bionic-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent implements OnInit {
  private userId: string;
  public passwordChangeForm: FormGroup;

  constructor(
    private userApi: SystemUserApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
  }

  private createForm(): void {
    this.passwordChangeForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmedPassword: ['', Validators.required]
    });
  }

  get currentPassword(): FormControl {
    return this.passwordChangeForm.get('currentPassword') as FormControl;
  }

  get newPassword(): FormControl {
    return this.passwordChangeForm.get('newPassword') as FormControl;
  }

  get confirmedPassword(): FormControl {
    return this.passwordChangeForm.get('confirmedPassword') as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData();

    if (formData) {
      this.userApi.updateUserPassword(formData).subscribe(
        () => {
          alert('Password updated successfuly');
          this.passwordChangeForm.reset();
        },
        error => {}
      );
    } else {
      alert('One or more required fields missing');
    }
  }

  private prepareFormData(): PasswordChangeModel {
    if (this.passwordChangeForm.valid) {
      return {
        id: this.userId,
        currentPassword: this.currentPassword.value,
        newPassword: this.newPassword.value,
        confirmedPassword: this.confirmedPassword.value
      };
    } else {
      return null;
    }
  }
}
