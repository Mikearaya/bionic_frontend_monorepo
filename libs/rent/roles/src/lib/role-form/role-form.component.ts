import { Component, OnInit } from '@angular/core';
import {
  SystemsRoles,
  SystemRoleModel,
  SystemRoleApiService
} from '@bionic/apis/common/system-roles-api';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-role-form',
  template: `
    <bionic-system-role-form
      [RolesList]="roles"
      [Role]="currentRole"
      (submitted)="onSubmit($event)"
    ></bionic-system-role-form>
  `,
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  roles: SystemsRoles[] = [];
  currentRole: SystemRoleModel;
  private roleId: string;
  isUpdate: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private roleApi: SystemRoleApiService
  ) {
    this.roles = this.roleApi.Roles;
  }

  ngOnInit() {
    this.roleId = this.activatedRoute.snapshot.paramMap.get('roleId');

    if (this.roleId) {
      this.isUpdate = true;
      this.roleApi
        .getSystemRoleById(this.roleId)
        .subscribe((data: SystemRoleModel) => (this.currentRole = data));
    }
  }

  onSubmit(data: SystemRoleModel): void {
    if (data) {
      if (this.isUpdate) {
        this.roleApi.updateSystemRole(data).subscribe(
          () => {
            alert('Role Updated Successfully');
          },
          (error: HttpErrorResponse) => {
            alert('Unable to update user role, pleace try again later');
          }
        );
      } else {
        this.roleApi.createSystemRole(data).subscribe(
          (d: SystemRoleModel) => {
            alert('Role Created Successfully');
          },
          (error: HttpErrorResponse) => {
            alert('Unable to create user role, pleace try again later');
          }
        );
      }
    }
  }
}
