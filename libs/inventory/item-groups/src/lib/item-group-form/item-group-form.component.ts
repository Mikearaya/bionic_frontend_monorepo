import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationComponent } from '@bionic/components/notification';
import {
  ItemGroupsApiService,
  ItemGroupView,
  ItemGroup
} from '@bionic/apis/inventory/item-groups-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-item-group-form',
  templateUrl: './item-group-form.component.html',
  styleUrls: ['./item-group-form.component.css']
})
export class ItemGroupFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  private groupId: number;
  public isUpdate: Boolean;
  public submitButtonText: string;
  public itemGroupForm: FormGroup;
  public itemGroupsList: ItemGroupView[];
  public itemGroupFields: { text: string; value: string };

  constructor(
    private itemGroupApi: ItemGroupsApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.createForm();
    this.itemGroupFields = { text: 'GroupName', value: 'Id' };
  }

  ngOnInit() {
    this.groupId = +this.activatedRoute.snapshot.paramMap.get('itemGroupId');

    this.itemGroupApi
      .getAllItemGroups()
      .subscribe((data: ItemGroupView[]) => (this.itemGroupsList = data));

    if (this.groupId) {
      this.isUpdate = true;
      this.submitButtonText = 'Update';

      this.itemGroupApi
        .getItemGroupById(this.groupId)
        .subscribe((data: ItemGroupView) => this.initializeForm(data));
    } else {
      this.isUpdate = false;
    }
  }

  get groupName(): FormControl {
    return this.itemGroupForm.get('GroupName') as FormControl;
  }

  get description(): FormControl {
    return this.itemGroupForm.get('Description') as FormControl;
  }

  get parentId(): FormControl {
    return this.itemGroupForm.get('ParentGroup') as FormControl;
  }

  private createForm(): void {
    this.itemGroupForm = this.formBuilder.group({
      GroupName: ['', Validators.required],
      Description: [''],
      ParentGroup: ['']
    });
  }

  private initializeForm(group: ItemGroupView): void {
    this.itemGroupForm.patchValue(group);
  }

  onSubmit(): void {
    if (!this.itemGroupForm.invalid) {
      const itemGroup = this.prepareFormData(this.itemGroupForm);

      if (!this.isUpdate) {
        this.itemGroupApi.CreateItemGroup(itemGroup).subscribe(
          result => {
            this.notification.showMessage('item Group Created', 'success');
            this.location.back();
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Unable to create item group',
              'error'
            );
          }
        );
      } else {
        this.itemGroupApi.UpdateItemGroup(itemGroup).subscribe(
          () => {
            this.notification.showMessage('item Group Updated', 'success');
            this.location.back();
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Unable to Update product group',
              'error'
            );
          }
        );
      }
    }
  }

  private prepareFormData(formData: FormGroup): ItemGroup {
    return {
      Id: this.groupId ? this.groupId : 0,
      GroupName: formData.get('GroupName').value,
      Description: formData.get('Description').value,
      ParentGroup: formData.get('ParentGroup').value
    };
  }

  deleteProductGroup(): void {
    if (this.isUpdate && this.groupId) {
      this.itemGroupApi.deleteItemGroup(this.groupId).subscribe(
        () => {
          this.notification.showMessage('Product group deleted successfuly');
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Failed while attempting to delete product group, try again later',
            'error'
          );
        }
      );
    }
  }
}
