import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationComponent } from '@bionic/components/notification';
import {
  WriteOffsApiService,
  WriteOffDetailModel,
  NewWriteOffModel,
  UpdatedWriteOffModel
} from '@bionic/apis/inventory/write-offs-api';
import { HttpErrorResponse } from '@angular/common/http';
import {
  StockBatchListView,
  StockBatchApiService
} from '@bionic/apis/inventory/stock-batch-api';

@Component({
  selector: 'bionic-write-off-form',
  templateUrl: './write-off-form.component.html',
  styleUrls: ['./write-off-form.component.css']
})
export class WriteOffFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  public writeOffTypes = ['Scrap', 'R&D'];
  public writeOffStatus = ['Valid', 'Canceled'];

  private writeoffId: number;
  public isAddNew: Boolean;
  public isUpdate: Boolean;
  public writeOffForm: FormGroup;

  public writenOffItems: WriteOffDetailModel = null;
  public itemBatchList: StockBatchListView[] = [];
  public itemFields: { text: string; value: string };

  constructor(
    private formBuilder: FormBuilder,
    private writeoffApi: WriteOffsApiService,
    private activatedRoute: ActivatedRoute,
    private stockBatchApi: StockBatchApiService,
    private location: Location
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.writeoffId = +this.activatedRoute.snapshot.paramMap.get('writeoffId');

    this.isUpdate = false;
    if (this.writeoffId) {
      this.isUpdate = true;
      this.writeoffApi
        .getWriteOffById(this.writeoffId)
        .subscribe((data: WriteOffDetailModel) => this.initializeForm(data));
    }
  }

  deleteWriteOff() {
    if (this.isUpdate && this.writeoffId) {
      this.writeoffApi.deleteWriteOff(this.writeoffId).subscribe(
        () => {
          this.notification.showMessage('Write-off deleted Successfully!!!');
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Failed while attempting to delete write-off, try again',
            'error'
          );
        }
      );
    }
  }

  private createForm(): void {
    this.writeOffForm = this.formBuilder.group({
      ItemId: ['', Validators.required],
      Note: [''],
      Status: ['valid'],
      Type: ['', Validators.required],
      WriteOffDetail: this.formBuilder.array([])
    });

    this.itemId.valueChanges.subscribe(data => {
      if (data != null) {
        this.stockBatchApi
          .getItemStockBatchById(data)
          .subscribe((batch: StockBatchListView[]) =>
            this.resetBatchItems(batch)
          );
      }
    });
  }

  private createWriteOffBatchArea(batch: StockBatchListView): FormGroup {
    return this.formBuilder.group({
      StorageId: [batch.Id, Validators.required],
      Quantity: [0, Validators.required]
    });
  }

  private resetBatchItems(batchs: StockBatchListView[]): void {
    this.writeOffDetail.controls = [];
    this.itemBatchList = batchs;
    if (batchs.length > 0) {
      batchs.map(b =>
        this.writeOffDetail.push(this.createWriteOffBatchArea(b))
      );
    }
  }

  private initializeForm(writeoff: WriteOffDetailModel): void {
    this.writenOffItems = writeoff;
    this.writeOffForm.patchValue(writeoff);
  }

  get itemId(): FormControl {
    return this.writeOffForm.get('ItemId') as FormControl;
  }

  get note(): FormControl {
    return this.writeOffForm.get('Note') as FormControl;
  }

  get status(): FormControl {
    return this.writeOffForm.get('Status') as FormControl;
  }

  get type(): FormControl {
    return this.writeOffForm.get('Type') as FormControl;
  }

  get writeOffDetail(): FormArray {
    return this.writeOffForm.get('WriteOffDetail') as FormArray;
  }

  batchItem(index: number): FormControl {
    return this.writeOffDetail.controls[index].get('StorageId') as FormControl;
  }

  quantity(index: number): FormControl {
    return this.writeOffDetail.controls[index].get('Quantity') as FormControl;
  }

  onSubmit(): void {
    if (!this.isUpdate) {
      const writeoff = this.prepareNewWriteoffModel();
      if (writeoff) {
        this.writeoffApi.createWriteOff(writeoff).subscribe(
          data => {
            this.isUpdate = true;
            this.notification.showMessage('Item Written off Successfully');
            this.initializeForm(data);
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'fasiled while writing off stock try again!!!',
              'error'
            );
          }
        );
      }
    } else if (this.isUpdate) {
      const writeoff = this.prepareUpdatedWriteoffModel();
      if (writeoff) {
        this.writeoffApi.updateWriteOff(writeoff).subscribe(
          data => {
            this.notification.showMessage(
              'Item Write-off Updated Successfully'
            );
          },
          (error: HttpErrorResponse) => {
            this.notification.showMessage(
              'Failed while updating Item Write-off, Try Again!!',
              'error'
            );
          }
        );
      }
    }
  }

  addWriteOff(): void {
    this.isAddNew = true;
    if (this.writenOffItems) {
      this.stockBatchApi
        .getItemStockBatchById(this.writenOffItems.ItemId)
        .subscribe((batch: StockBatchListView[]) =>
          this.resetBatchItems(batch)
        );
    }
  }

  updateWrittenOffItem(): void {}
  private prepareNewWriteoffModel(): NewWriteOffModel | null {
    if (this.writeOffForm.valid) {
      const writeoff: NewWriteOffModel = {
        ItemId: this.itemId.value,
        Note: this.note.value,
        Status: this.status.value,
        Type: this.type.value,
        WriteOffDetail: []
      };
      for (let i = 0; i < this.writeOffDetail.controls.length; i++) {
        const quantity = this.quantity(i).value;
        if (quantity > 0) {
          writeoff.WriteOffDetail.push({
            Quantity: quantity,
            BatchStorageId: this.batchItem(i).value
          });
        }
      }

      return writeoff;
    } else {
      return null;
    }
  }

  private prepareUpdatedWriteoffModel(): UpdatedWriteOffModel | null {
    if (this.writeOffForm.valid) {
      const writeoff: UpdatedWriteOffModel = {
        Id: this.writeoffId,
        Note: this.note.value,
        Status: this.status.value,
        Type: this.type.value,
        WriteOffDetail: []
      };

      for (let i = 0; i < this.writeOffDetail.controls.length; i++) {
        const quantity = this.quantity(i).value;

        if (quantity > 0) {
          writeoff.WriteOffDetail.push({
            Quantity: quantity,
            BatchStorageId: this.batchItem(i).value
          });
        }
      }

      return writeoff;
    } else {
      return null;
    }
  }
}
