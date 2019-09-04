import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Location } from '@angular/common';

import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { NotificationComponent } from '@bionic/components/notification';
import {
  StockBatchStorageView,
  StockBatchDetailView
} from '@bionic/apis/inventory/stock-batch-api';
import {
  StockMovementApiService,
  StockLotMovementModel
} from '@bionic/apis/inventory/stock-movement-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-stock-movement-form',
  templateUrl: './stock-movement-form.component.html',
  styleUrls: ['./stock-movement-form.component.css']
})
export class StockMovementFormComponent implements OnInit {
  @ViewChild('notification')
  public notification: NotificationComponent;

  public isUpdate: Boolean;

  public lotMovementForm: FormGroup;
  public lotStoragesList: StockBatchStorageView[];
  public lotStorageFields: { text: string; value: string };

  private lotId: number;

  constructor(
    private stockMovementApi: StockMovementApiService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.createForm();

    this.lotStorageFields = { text: 'storage', value: 'id' };
  }

  ngOnInit() {
    this.lotId = +this.activatedRoute.snapshot.paramMap.get('lotId');

    if (this.lotId) {
      this.currentLotId.setValue(this.lotId);

      /*       this.stockMovementApi
        .getStockBatchById(this.lotId)
        .subscribe((data: StockBatchDetailView) => {
          this.itemChanged(data.ItemId);
          this.lotChanged(this.lotId);
        }); */
    }
  }

  private createForm(): void {
    this.lotMovementForm = this.formBuilder.group({
      ItemId: ['', Validators.required],
      CurrentLotId: ['', Validators.required],
      CurrentStorage: ['', Validators.required],
      Quantity: ['', Validators.required],
      NewStorage: ['', Validators.required]
    });
  }

  itemChanged(selectedItemId: number): void {
    if (selectedItemId) {
      this.itemId.setValue(selectedItemId);
      /*  this.stockMovementApi
        .getItemStockBatchById(selectedItemId)
        .subscribe((data: any) => (this.lotsList = data), this.handleError); */
    }
  }

  lotChanged(selectedLotId: number): void {
    if (selectedLotId) {
      this.currentLotId.setValue(selectedLotId);
      /*    this.stockMovementApi
        .getStockLotStorages(selectedLotId)
        .subscribe(
          (data: StockBatchStorageView[]) => (this.lotStoragesList = data),
          this.handleError
        ); */
    }
  }

  get itemId(): FormControl {
    return this.lotMovementForm.get('ItemId') as FormControl;
  }

  get currentStorage(): FormControl {
    return this.lotMovementForm.get('CurrentStorage') as FormControl;
  }

  get quantity(): FormControl {
    return this.lotMovementForm.get('Quantity') as FormControl;
  }

  get currentLotId(): FormControl {
    return this.lotMovementForm.get('CurrentLotId') as FormControl;
  }

  get newStorage(): FormControl {
    return this.lotMovementForm.get('NewStorage') as FormControl;
  }

  onSubmit(): void {
    const newMovement = this.prepareFormData();

    if (newMovement) {
      this.stockMovementApi.moveStockLot(newMovement).subscribe(
        (data: StockBatchDetailView) => {
          this.notification.showMessage(
            'Stock lot movement completed successfuly'
          );
          this.location.back();
        },
        (error: HttpErrorResponse) => {
          this.notification.showMessage(
            'Error occured While moveing stock lot, try agin later'
          );
        }
      );
    }
  }

  prepareFormData(): StockLotMovementModel | null {
    if (this.lotMovementForm.invalid) {
      return null;
    }

    const lotMovement: StockLotMovementModel = {
      LotId: this.currentStorage.value,
      Quantity: this.quantity.value,
      NewStorageId: this.newStorage.value
    };

    return lotMovement;
  }
}
