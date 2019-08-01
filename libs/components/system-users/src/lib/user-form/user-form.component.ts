import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
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

@Component({
  selector: 'bionic-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {
  public userProfileForm: FormGroup;
  private userId: string;

  @Output()
  public submitted: EventEmitter<SystemUserModel> = new EventEmitter();

  @Input()
  public user: SystemUserViewModel;
  isUpdate: boolean;

  roleFields: { text: string; value: string };

  constructor(
    private userApi: SystemUserApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
    this.roleFields = { text: 'name', value: 'id' };
  }

  ngOnChanges() {
    if (this.user) {
      this.userProfileForm.patchValue(this.user);
    }
  }

  createForm(): void {
    this.userProfileForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      FullName: [''],
      Email: ['', Validators.email],
      PhoneNumber: [''],
      RoleId: ['']
    });
  }

  get userName(): FormControl {
    return this.userProfileForm.get('UserName') as FormControl;
  }

  get fullName(): FormControl {
    return this.userProfileForm.get('FullName') as FormControl;
  }

  get email(): FormControl {
    return this.userProfileForm.get('Email') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.userProfileForm.get('PhoneNumber') as FormControl;
  }

  get roleId(): FormControl {
    return this.userProfileForm.get('RoleId') as FormControl;
  }

  onSubmit(): void {
    const formData = this.prepareFormData();

    if (formData) {
      this.submitted.emit(formData);
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
