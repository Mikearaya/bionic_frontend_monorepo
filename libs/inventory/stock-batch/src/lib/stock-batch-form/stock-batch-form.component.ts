import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NotificationComponent } from '@bionic/components/notification';
import {
  StockBatchApiService,
  StockBatchDetailView,
  NewStockBatchModel,
  UpdatedStockBatchModel
} from '@bionic/apis/inventory/stock-batch-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-stock-batch-form',
  templateUrl: './stock-batch-form.component.html',
  styleUrls: ['./stock-batch-form.component.css']
})
export class StockBatchFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  public stockBatchForm: FormGroup;
  public isUpdate: Boolean;
  public stockBatchStatus = ['Recieved', 'Planed', 'Canceled'];

  private stockBatchId: number;

  constructor(
    private stockBatchApi: StockBatchApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.stockBatchId = +this.activatedRoute.snapshot.paramMap.get(
      'stockBatchId'
    );

    if (this.stockBatchId) {
      this.isUpdate = true;
      this.stockBatchApi
        .getStockBatchById(this.stockBatchId)
        .subscribe((data: StockBatchDetailView) => this.initializeForm(data));
    }
  }

  private createForm(): void {
    this.stockBatchForm = this.formBuilder.group({
      ItemId: ['', Validators.required],
      Status: ['', Validators.required],
      Quantity: ['', Validators.required],
      AvailableFrom: ['', Validators.required],
      ExpiryDate: [''],
      UnitCost: ['', Validators.required],
      Storages: this.formBuilder.array([this.createStorageLocation()])
    });
  }

  private createStorageLocation(): FormGroup {
    return this.formBuilder.group({
      StorageId: ['', Validators.required],
      Quantity: ['', Validators.required]
    });
  }

  private initializeForm(batch: StockBatchDetailView): void {
    this.stockBatchForm.patchValue(batch);
  }

  get itemId(): FormControl {
    return this.stockBatchForm.get('ItemId') as FormControl;
  }

  get status(): FormControl {
    return this.stockBatchForm.get('Status') as FormControl;
  }

  get quantity(): FormControl {
    return this.stockBatchForm.get('Quantity') as FormControl;
  }

  get availableFrom(): FormControl {
    return this.stockBatchForm.get('AvailableFrom') as FormControl;
  }

  get unitCost(): FormControl {
    return this.stockBatchForm.get('UnitCost') as FormControl;
  }

  get expiryDate(): FormControl {
    return this.stockBatchForm.get('ExpiryDate') as FormControl;
  }
  get storageLocation(): FormArray {
    return this.stockBatchForm.get('Storages') as FormArray;
  }

  moveStockLot(index: number): void {
    this.router.navigate([`stocks/stock-lots/${this.stockBatchId}/movements`]);
  }

  onSubmit(): void {
    if (!this.isUpdate) {
      const stockBatch = this.prepareNewFormData();

      if (stockBatch) {
        this.stockBatchApi.createNewStockBatch(stockBatch).subscribe(
          (data: StockBatchDetailView) => {
            this.notification.showMessage('Stock Batch Created Successfuly');
            this.initializeForm(data);
            this.isUpdate = true;
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Something Wrong Happened While Creating Batch, Try Again',
              'error'
            );
          }
        );
      }
    } else if (this.isUpdate) {
      const stockBatch = this.prepareUpdatedFormData();

      this.stockBatchApi.updateStockBatch(stockBatch).subscribe(
        () => this.notification.showMessage('Stock Batch Updated Successfuly'),
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Something Wrong Happened While Updating Batch, Try Again',
            'error'
          );
        }
      );
    }
  }

  addStorage(): void {
    this.storageLocation.controls.push(this.createStorageLocation());
  }

  deleteStorage(index: number): void {
    this.storageLocation.removeAt(index);
  }

  private prepareNewFormData(): NewStockBatchModel | null {
    if (this.stockBatchForm.valid && !this.isUpdate) {
      const newBatch: NewStockBatchModel = {
        ItemId: this.itemId.value,
        Quantity: this.quantity.value,
        Status: this.status.value,
        AvailableFrom: this.availableFrom.value,
        UnitCost: this.unitCost.value,
        ExpiryDate: this.expiryDate.value,
        StorageLocation: []
      };

      this.storageLocation.controls.map(store =>
        newBatch.StorageLocation.push({
          StorageId: store.value.StorageId,
          Quantity: store.value.Quantity
        })
      );

      return newBatch;
    } else {
      return null;
    }
  }

  private prepareUpdatedFormData(): UpdatedStockBatchModel | null {
    if (this.stockBatchForm.valid && this.isUpdate && this.stockBatchId) {
      return {
        Id: this.stockBatchId,
        Status: this.status.value,
        AvailableFrom: this.availableFrom.value,
        ExpiryDate: this.expiryDate.value
      };
    } else {
      return null;
    }
  }
}
