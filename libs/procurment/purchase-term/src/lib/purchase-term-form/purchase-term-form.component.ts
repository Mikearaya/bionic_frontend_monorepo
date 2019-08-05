import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Location } from '@angular/common';
import { NotificationComponent } from '@bionic/components/notification';
import { ItemView, ItemApiService } from '@bionic/apis/inventory/item-api';
import {
  VendorViewModel,
  VendorApiService
} from '@bionic/apis/procurment/vendor-api';
import {
  PurchaseTermApiService,
  PurchaseTermView,
  PurchaseTerm
} from '@bionic/apis/procurment/purchase-term-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-purchase-term-form',
  templateUrl: './purchase-term-form.component.html',
  styleUrls: ['./purchase-term-form.component.css']
})
export class PurchaseTermFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  private termId: number;
  public isUpdate: Boolean;
  public title: string;
  public submitButtonText: string;
  public purchaseTermForm: FormGroup;
  public itemsList: ItemView[] = [];
  public itemFields: { text: string; value: string };
  public vendorsList: VendorViewModel[] = [];
  public vendorFields: { text: string; value: string };

  constructor(
    private purchaseTermApi: PurchaseTermApiService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private itemApi: ItemApiService,
    private vendorApi: VendorApiService,
    private location: Location
  ) {
    this.vendorFields = { text: 'name', value: 'id' };
    this.itemFields = { text: 'name', value: 'id' };
    this.createForm();
  }

  ngOnInit() {
    this.termId = +this.activatedRoute.snapshot.paramMap.get('purchaseTermId');

    this.isUpdate = false;
    this.title = 'Create Vendor Purchase Term';
    this.submitButtonText = 'Save';

    this.itemApi
      .getAllItems()
      .subscribe((data: ItemView[]) => (this.itemsList = data));

    this.vendorApi
      .getAllVendors()
      .subscribe((data: VendorViewModel[]) => (this.vendorsList = data));

    if (this.termId) {
      this.isUpdate = true;
      this.title = `Update Vendor Purchase Term #${this.termId}`;
      this.submitButtonText = 'Update';

      this.purchaseTermApi
        .getPurchaseTermById(this.termId)
        .subscribe((data: PurchaseTermView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.purchaseTermForm = this.formBuilder.group({
      vendorId: ['', Validators.required],
      itemId: ['', Validators.required],
      vendorProductId: [''],
      priority: ['', Validators.pattern('[0-9]*')],
      leadTime: [''],
      minimumQuantity: [''],
      unitPrice: ['', Validators.required]
    });
  }

  private initializeForm(term: PurchaseTermView): void {
    this.purchaseTermForm.patchValue(term);
  }

  get vendorId(): FormControl {
    return this.purchaseTermForm.get('vendorId') as FormControl;
  }

  get itemId(): FormControl {
    return this.purchaseTermForm.get('itemId') as FormControl;
  }

  get vendorProductId(): FormControl {
    return this.purchaseTermForm.get('vendorProductId') as FormControl;
  }

  get priority(): FormControl {
    return this.purchaseTermForm.get('priority') as FormControl;
  }

  get leadTime(): FormControl {
    return this.purchaseTermForm.get('leadTime') as FormControl;
  }

  get minimumQuantity(): FormControl {
    return this.purchaseTermForm.get('minimumQuantity') as FormControl;
  }

  get unitPrice(): FormControl {
    return this.purchaseTermForm.get('unitPrice') as FormControl;
  }

  onSubmit(): void {
    const purchaseTerm = this.prepareFormData();

    if (this.isUpdate && purchaseTerm) {
      this.purchaseTermApi
        .updatePurchaseTerm(purchaseTerm.id, purchaseTerm)
        .subscribe(() =>
          this.notification.showMessage('Purchase term Updated!!!')
        );
    } else {
      this.purchaseTermApi.createPurchaseTerm(purchaseTerm).subscribe(() => {
        this.notification.showMessage('Purchase term Created!!!');
        this.purchaseTermForm.reset();
      });
    }
  }

  private prepareFormData(): PurchaseTerm | null {
    if (this.purchaseTermForm.valid) {
      const purchaseTerm: PurchaseTerm = {
        id: this.termId ? this.termId : 0,
        vendorId: this.vendorId.value,
        itemId: this.itemId.value,
        vendorProductId: this.vendorProductId.value,
        priority: this.priority.value,
        leadtime: this.leadTime.value,
        minimumQuantity: this.minimumQuantity.value,
        unitPrice: this.unitPrice.value
      };

      return purchaseTerm;
    } else {
      return null;
    }
  }
}
