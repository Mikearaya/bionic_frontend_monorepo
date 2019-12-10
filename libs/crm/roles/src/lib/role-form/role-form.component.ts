import { Component, OnInit, Input } from '@angular/core';
import {
  SystemRoleApiService,
  SystemRoleModel,
  SystemsRoles
} from '@bionic/apis/common/system-roles-api';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationComponent } from '@bionic/components/notification';

@Component({
  selector: 'bionic-role-form',
  template: `
    <bionic-system-role-form
      [RolesList]="roles"
      [Role]="currentRole"
      (submitted)="onSubmit($event)"
    ></bionic-system-role-form>
    <bionic-notification #notification> </bionic-notification>
  `,
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  roles: SystemsRoles[] = [];
  currentRole: SystemRoleModel;
  private roleId: string;
  @Input()
  public notification: NotificationComponent;
  isUpdate: boolean;
  constructor(
    private rolesApi: SystemRoleApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.roles = this.rolesApi.Roles;
  }

  ngOnInit() {
    this.roleId = this.activatedRoute.snapshot.paramMap.get('roleId');

    if (this.roleId) {
      this.isUpdate = true;
      this.rolesApi
        .getSystemRoleById(this.roleId)
        .subscribe((data: SystemRoleModel) => {
          this.currentRole = data;
        });
    }
  }

  onSubmit(data: SystemRoleModel): void {
    if (data) {
      if (this.isUpdate) {
        this.rolesApi.updateSystemRole(data).subscribe(
          () => {
            this.notification.showMessage('Role Updated Successfully');
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Unable to update user role, pleace try again later',
              'error'
            );
          }
        );
      } else {
        this.rolesApi.createSystemRole(data).subscribe(
          (d: SystemRoleModel) => {
            this.notification.showMessage('Role Created Successfully');
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Unable to create user role, pleace try again later',
              'error'
            );
          }
        );
      }
    }
  }
}
