import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  SystemUserApiService,
  SystemUserViewModel,
  SystemUserModel
} from '@bionic/apis/common/system-users-api';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemRoleApiService } from '@bionic/apis/common/system-roles-api';

@Component({
  selector: 'bionic-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public userProfileForm: FormGroup;
  private userId: string;
  isUpdate: boolean;
  rolesList: any;
  roleFields: { text: string; value: string };

  constructor(
    private userApi: SystemUserApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
    this.roleFields = { text: 'name', value: 'id' };
  }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

    if (this.userId) {
      this.isUpdate = true;
      this.userApi
        .getUserById(this.userId)
        .subscribe((data: SystemUserViewModel) => this.initializeForm(data));
    }
  }

  createForm(): void {
    this.userProfileForm = this.formBuilder.group({
      userName: ['', Validators.required],
      fullName: [''],
      email: ['', Validators.email],
      phoneNumber: [''],
      roleId: ['']
    });
  }

  initializeForm(user: SystemUserViewModel): void {
    this.userProfileForm = this.formBuilder.group({
      userName: [user.UserName, Validators.required],
      fullName: [],
      email: [user.Email, Validators.email],
      phoneNumber: [user.PhoneNumber],
      roleId: [user.RoleId]
    });
  }

  get userName(): FormControl {
    return this.userProfileForm.get('userName') as FormControl;
  }

  get fullName(): FormControl {
    return this.userProfileForm.get('fullName') as FormControl;
  }

  get email(): FormControl {
    return this.userProfileForm.get('email') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.userProfileForm.get('phoneNumber') as FormControl;
  }

  get roleId(): FormControl {
    return this.userProfileForm.get('roleId') as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData();

    if (formData && this.isUpdate) {
      this.userApi.updateUser(formData).subscribe(
        () => alert('Profile updated successfuly'),
        (error: HttpErrorResponse) => {
          alert('Failed while attemptin to update profile, Try again later');
        }
      );
    } else if (formData) {
      this.userApi.createUser(formData).subscribe(
        () => alert('Profile Created successfuly'),
        (error: HttpErrorResponse) => {
          alert('Failed while attemptin to update profile, Try again later');
        }
      );
    }
  }

  private prepareFormData(): SystemUserModel | null {
    if (this.userProfileForm.valid) {
      return {
        Id: this.userId,
        UserName: this.userName.value,
        FullName: this.fullName.value,
        Email: this.email.value,
        PhoneNumber: this.phoneNumber.value,
        RoleId: this.roleId.value
      };
    } else {
      return null;
    }
  }
}
