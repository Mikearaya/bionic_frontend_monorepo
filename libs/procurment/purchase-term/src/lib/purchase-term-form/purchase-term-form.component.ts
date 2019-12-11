import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NotificationComponent } from '@bionic/components/notification';
import { ItemView } from '@bionic/apis/inventory/item-api';
import { VendorViewModel } from '@bionic/apis/procurment/vendor-api';
import {
  PurchaseTermApiService,
  PurchaseTermView,
  PurchaseTerm
} from '@bionic/apis/procurment/purchase-term-api';

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
    private formBuilder: FormBuilder
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

    if (this.termId) {
      this.isUpdate = true;
      this.title = `Update Vendor Purchase Term #${this.termId}`;
      this.submitButtonText = 'Update';

      this.purchaseTermApi
        .getPurchaseTermById(this.termId)
        .subscribe((data: PurchaseTermView) => this.initializeForm(data));
    }
  }
  changed(data: any): void {
    alert(data);
  }
  private createForm(): void {
    this.purchaseTermForm = this.formBuilder.group({
      VendorId: ['', Validators.required],
      ItemId: ['', Validators.required],
      VendorProductId: [''],
      Priority: ['', Validators.pattern('[0-9]*')],
      Leadtime: [''],
      MinimumQuantity: [''],
      UnitPrice: ['', Validators.required]
    });
  }

  private initializeForm(term: PurchaseTermView): void {
    this.purchaseTermForm.patchValue(term);
  }

  get vendorId(): FormControl {
    return this.purchaseTermForm.get('VendorId') as FormControl;
  }

  get itemId(): FormControl {
    return this.purchaseTermForm.get('ItemId') as FormControl;
  }

  get vendorProductId(): FormControl {
    return this.purchaseTermForm.get('VendorProductId') as FormControl;
  }

  get priority(): FormControl {
    return this.purchaseTermForm.get('Priority') as FormControl;
  }

  get leadTime(): FormControl {
    return this.purchaseTermForm.get('LeadTime') as FormControl;
  }

  get minimumQuantity(): FormControl {
    return this.purchaseTermForm.get('MinimumQuantity') as FormControl;
  }

  get unitPrice(): FormControl {
    return this.purchaseTermForm.get('UnitPrice') as FormControl;
  }

  onSubmit(): void {
    const purchaseTerm = this.prepareFormData();

    if (this.isUpdate && purchaseTerm) {
      this.purchaseTermApi
        .updatePurchaseTerm(purchaseTerm.Id, purchaseTerm)
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
      const purchaseTerm: PurchaseTerm = this.purchaseTermForm.value;

      if (this.termId) {
        purchaseTerm.Id = this.termId;
      }

      return purchaseTerm;
    } else {
      return null;
    }
  }
}
