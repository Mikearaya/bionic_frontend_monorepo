/*
 * @CreateTime: Dec 3, 2018 7:38 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Jan 15, 2019 11:24 PM
 * @Description: Modify Here, Please
 */

import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, ViewChild } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Location } from '@angular/common';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { NotificationComponent } from '@bionic/components/notification';
import {
  ItemApiService,
  ItemView,
  ItemModel
} from '@bionic/apis/inventory/item-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @ViewChild('procured')
  public procured: any;
  @ViewChild('notification')
  public notification: NotificationComponent;
  @ViewChild('element') tabObj: TabComponent;

  @ViewChild('headerStyles') listObj: TabComponent;
  public headerText: Object[] = [
    { Id: 'header1', headerStyle: 'fill', text: 'General' },
    { Id: 'header2', headerStyle: 'fill', text: 'BOMs' },
    { Id: 'header3', headerStyle: 'fill', text: 'Routings' },
    { Id: 'header4', headerStyle: 'fill', text: 'Purchase Term' },
    { Id: 'header5', headerStyle: 'fill', text: 'General' }
  ];

  public submited: Boolean;
  public created: Boolean;

  public fields: Object = { text: 'text', value: 'headerStyle' };
  public height: String = '220px';
  public value: String = 'default';

  public productForm: FormGroup;
  public isUpdate: Boolean = false;
  public itemId: number;

  constructor(
    private itemApi: ItemApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.itemId = +this.activatedRoute.snapshot.paramMap.get('itemId');

    if (this.itemId) {
      this.isUpdate = true;
      this.itemApi
        .getItemById(this.itemId)
        .subscribe((data: ItemView) => this.initializeForm(data));
    }
  }

  get code(): FormControl {
    return this.productForm.get('Code') as FormControl;
  }
  get name(): FormControl {
    return this.productForm.get('Name') as FormControl;
  }
  get groupId(): FormControl {
    return this.productForm.get('GroupId') as FormControl;
  }

  get primaryUomId(): FormControl {
    return this.productForm.get('PrimaryUomId') as FormControl;
  }

  get minimumQuantity(): FormControl {
    return this.productForm.get('MinimumQuantity') as FormControl;
  }

  get storageId(): FormControl {
    return this.productForm.get('DefaultStorageId') as FormControl;
  }

  get isProcured(): FormControl {
    return this.productForm.get('IsProcured') as FormControl;
  }

  get isInventoryItem(): FormControl {
    return this.productForm.get('IsInventoryItem') as FormControl;
  }

  get weight(): FormControl {
    return this.productForm.get('Weight') as FormControl;
  }

  get shelfLife(): FormControl {
    return this.productForm.get('ShelfLife') as FormControl;
  }

  get price(): FormControl {
    return this.productForm.get('Price') as FormControl;
  }
  get image(): FormControl {
    return this.productForm.get('Image') as FormControl;
  }
  get unitCost(): FormControl {
    return this.productForm.get('UnitCost') as FormControl;
  }

  createForm(): void {
    this.productForm = this.formBuilder.group({
      Code: ['', Validators.required],
      Name: ['', Validators.required],
      GroupId: ['', Validators.required],
      DefaultStorageId: ['', Validators.required],
      PrimaryUomId: ['', Validators.required],
      MinimumQuantity: [0, Validators.min(0)],
      IsProcured: [false],
      IsInventoryItem: [true],
      Weight: ['', [Validators.required, Validators.min(0)]],
      ShelfLife: [0, [Validators.required, Validators.min(0)]],
      Price: ['', [Validators.required, Validators.min(0)]],
      Image: [''],
      UnitCost: ['', [Validators.required, Validators.min(0)]]
    });
  }

  initializeForm(item: ItemView) {
    this.productForm.patchValue(item);
  }

  onSubmit() {
    const formData = this.prepareFormData(this.productForm.value);
    this.submited = true;
    if (this.isUpdate === false) {
      this.itemApi.saveItem(formData).subscribe(
        (data: ItemModel) => {
          this.notification.showMessage('Item Created!!!');
          this.itemId = data.Id;
          this.submited = true;
          this.created = true;
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage('Item Creation Failed', 'error');
          this.created = false;
          this.submited = false;
        }
      );
    } else {
      this.itemApi.updateItem(formData).subscribe(
        () => {
          this.notification.showMessage('Item Updated!!!');
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Item Update Failed, try again!',
            'error'
          );
        }
      );
    }
  }

  prepareFormData(form: any): ItemModel {
    return {
      Id: this.itemId,
      Code: this.code.value,
      Name: this.name.value,
      GroupId: this.groupId.value,
      PrimaryUomId: this.primaryUomId.value,
      IsProcured: this.isProcured.value,
      IsInventoryItem: this.isInventoryItem.value,
      MinimumQuantity: this.minimumQuantity.value,
      DefaultStorageId: this.storageId.value,
      Weight: this.weight.value,
      Price: this.price.value,
      ShelfLife: this.shelfLife.value,
      UnitCost: this.unitCost.value,
      Image: this.image.value
    };
  }
}
