import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  SystemUserModel,
  SystemUserViewModel,
  SystemUserApiService
} from '@bionic/apis/common/system-users-api';
import { NotificationComponent } from '@bionic/components/notification';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <bionic-user-form [user]="currentUser" (submitted)="onSubmitted($event)">
    </bionic-user-form>
    <bionic-notification #notification> </bionic-notification>
  `,
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;
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
          () => this.notification.showMessage('Profile updated successfuly'),
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Failed while attemptin to update profile, Try again later',
              'error'
            );
          }
        );
      } else if (data) {
        this.userApi.createUser(data).subscribe(
          () => this.notification.showMessage('Profile Created successfuly'),
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Failed while attemptin to update profile, Try again later',
              'error'
            );
          }
        );
      }
    }
  }
}
