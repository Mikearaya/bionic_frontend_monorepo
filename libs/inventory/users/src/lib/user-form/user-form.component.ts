import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SystemUserApiService,
  SystemUserViewModel,
  SystemUserModel
} from '@bionic/apis/common/system-users-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  template: `
    <bionic-user-form [user]="currentUser" (submitted)="onSubmitted($event)">
    </bionic-user-form>
  `,
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private userId: string;
  isUpdate: boolean;
  currentUser: SystemUserViewModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userApi: SystemUserApiService
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

    if (this.userId) {
      this.isUpdate = true;
      this.userApi
        .getUserById(this.userId)
        .subscribe((data: SystemUserViewModel) => (this.currentUser = data));
    }
  }

  onSubmitted(data: SystemUserModel): void {
    if (data) {
      if (data && this.isUpdate) {
        this.userApi.updateUser(data).subscribe(
          () => alert('Profile updated successfuly'),
          (error: HttpErrorResponse) => {
            alert('Failed while attemptin to update profile, Try again later');
          }
        );
      } else if (data) {
        this.userApi.createUser(data).subscribe(
          () => alert('Profile Created successfuly'),
          (error: HttpErrorResponse) => {
            alert('Failed while attemptin to update profile, Try again later');
          }
        );
      }
    }
  }
}
