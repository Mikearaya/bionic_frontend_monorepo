import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ActivatedRoute } from '@angular/router';
import {
  SystemRoleApiService,
  SystemRoleModel
} from '@bionic/apis/common/system-roles-api';
import { HttpErrorResponse } from '@angular/common/http';
import { SystemsRoles, ROLES } from './system-role.model';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'bionic-system-role-form',
  templateUrl: './system-role-form.component.html',
  styleUrls: ['./system-role-form.component.css']
})
export class SystemRoleFormComponent implements OnInit {
  public allSelected: Boolean;
  public userRoleForm: FormGroup;
  private roleId: string;
  public title: string;
  public isUpdate: Boolean;

  public field: {
    dataSource: Object[];
    id: string;
    text: string;
    child: string;
  };
  role: SystemsRoles[] = ROLES;

  selectedRoles: string[] = [];
  constructor(
    private roleApi: SystemRoleApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  onChange(email: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedRoles.push(email);
    } else {
      this.selectedRoles.splice(this.selectedRoles.indexOf(email), 1);
    }
  }
  ngOnInit() {
    this.roleId = this.activatedRoute.snapshot.paramMap.get('roleId');

    if (this.roleId) {
      this.isUpdate = true;
      this.roleApi
        .getSystemRoleById(this.roleId)
        .subscribe((data: SystemRoleModel) => {
          data.Claims.forEach(elemet => {
            this.selectedRoles.push(elemet.ClaimType);
          });
          this.roleName.setValue(data.Name);
        });
    }
  }

  isChecked(value: string): boolean {
    return this.selectedRoles.indexOf(value) !== -1 ? true : false;
  }

  createForm(): void {
    this.userRoleForm = this.formBuilder.group({
      roleName: ['', Validators.required]
    });
  }

  get roleName(): FormControl {
    return this.userRoleForm.get('roleName') as FormControl;
  }

  onSubmit(): void {
    const role = this.prepareFormData();
    if (role) {
      if (this.isUpdate) {
        this.roleApi.updateSystemRole(role).subscribe(
          () => {
            alert('Role Updated Successfully');
          },
          (error: HttpErrorResponse) => {
            alert('Unable to update user role, pleace try again later');
          }
        );
      } else {
        this.roleApi.createSystemRole(role).subscribe(
          (data: SystemRoleModel) => {
            this.userRoleForm.reset();
            alert('Role Created Successfully');
          },
          (error: HttpErrorResponse) => {
            alert('Unable to create user role, pleace try again later');
          }
        );
      }
    }
  }

  selectAll(): void {
    this.selectedRoles = [];
    this.role.forEach(e => {
      if (e.add) {
        this.selectedRoles.push(e.add);
      }
      if (e.view) {
        this.selectedRoles.push(e.view);
      }
      if (e.delete) {
        this.selectedRoles.push(e.delete);
      }
      if (e.edit) {
        this.selectedRoles.push(e.edit);
      }

      e.others.forEach(e2 => {
        if (e2.value) {
          this.selectedRoles.push(e2.value);
        }
      });
    });
  }

  public nodeCheck(args: NodeClickEventArgs): void {}
  featureChecked(feature: any, active): void {}

  prepareFormData(): SystemRoleModel | null {
    const roleModel = new SystemRoleModel();
    if (this.userRoleForm.valid) {
      if (this.isUpdate) {
        roleModel.Id = this.roleId;
      }

      roleModel.Name = this.roleName.value;
      this.selectedRoles.forEach(element => {
        roleModel.Claims.push({
          ClaimType: element,
          ClaimValue: 'true'
        });
      });
      return roleModel;
    } else {
      return null;
    }
  }
}
