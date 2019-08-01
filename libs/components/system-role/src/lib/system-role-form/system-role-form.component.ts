import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  SystemRoleModel,
  SystemsRoles
} from '@bionic/apis/common/system-roles-api';

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

  @Input()
  public RolesList: SystemsRoles[];
  @Input()
  public Role: SystemRoleModel;

  @Output()
  public submitted: EventEmitter<SystemRoleModel> = new EventEmitter();

  public field: {
    dataSource: Object[];
    id: string;
    text: string;
    child: string;
  };

  selectedRoles: string[] = [];
  constructor(private formBuilder: FormBuilder) {
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
    if (this.Role) {
      this.Role.Claims.forEach(elemet => {
        this.selectedRoles.push(elemet.ClaimType);
      });
      this.roleName.setValue(this.Role.Name);
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

    this.submitted.emit(role);
  }

  selectAll(): void {
    this.selectedRoles = [];
    this.RolesList.forEach(e => {
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

  deselectAll(): void {
    this.selectedRoles = [];
  }

  prepareFormData(): SystemRoleModel | null {
    const roleModel = new SystemRoleModel();
    if (this.userRoleForm.valid) {
      if (this.isUpdate) {
        roleModel.Id = this.roleId;
      }

      roleModel.Name = this.roleName.value;
      this.selectedRoles.forEach(elemnt => {
        roleModel.Claims.push({
          ClaimType: elemnt,
          ClaimValue: 'true'
        });
      });
      return roleModel;
    } else {
      return null;
    }
  }
}
