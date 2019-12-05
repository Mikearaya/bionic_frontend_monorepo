import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  Input,
  SimpleChanges
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
  FormArray
} from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  SystemLookupCategoriesModel,
  SystemLookupApiService,
  LookupViewModel,
  LookupModel
} from '@bionic/apis/common/system-lookup-api';

@Component({
  selector: 'bionic-system-lookup-form',
  templateUrl: './system-lookup-form.component.html',
  styleUrls: ['./system-lookup-form.component.css']
})
export class SystemLookupFormComponent implements OnInit, OnChanges {
  @Output()
  public submitted: EventEmitter<LookupModel> = new EventEmitter();
  @Input()
  public lookup: LookupViewModel;

  public lookupForm: FormGroup;
  public isUpdate = false;
  public typeFields: object;
  public typeList: object;
  public LookupId: any;
  public lookupFields: { value: string; text: string };

  public lookupsList: SystemLookupCategoriesModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private lookupApi: SystemLookupApiService
  ) {
    this.createLookupForm();
  }

  ngOnInit() {
    this.lookupFields = { value: 'Id', text: 'Name' };
    // get the look Id from route parameter if present
    this.LookupId = this.activatedRoute.snapshot.paramMap.get('lookupId');
    this.lookupApi
      .getSystemLookupCategories()
      .subscribe((e: SystemLookupCategoriesModel[]) => (this.lookupsList = e));

    if (this.lookup) {
      // if lookup id is present get the related account value
      this.isUpdate = true;
      this.initializeLookup(this.lookup);
      // initialize the form with the retrived lookup value
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lookup.currentValue) {
      this.initializeLookup(changes.lookup.currentValue);
    }
  }

  get Lookups(): FormArray {
    return this.lookupForm.get('lookup') as FormArray;
  }

  createLookupForm() {
    this.lookupForm = this.formBuilder.group({
      lookup: this.formBuilder.array([
        this.formBuilder.group({
          Id: ['', Validators.required],
          Type: ['', Validators.required],
          Value: ['', Validators.required]
        })
      ])
    });
  }

  initializeLookup(data: LookupViewModel) {
    this.Lookups.patchValue([data]);
  }

  removeRow(index: number): void {
    const id = this.Lookups.controls[index].get('Id');
    if (id) {
      const confirmation = confirm('Are you sure you want to delete this item');

      if (confirmation) {
        this.lookupApi.deleteLookup(id.value).subscribe(
          () => {
            this.location.back();
            alert('lookup deleted successfuly');
          },
          () =>
            alert(
              'Unknown error occured while attempting to delete system lookup'
            )
        );
      }
    } else {
      this.Lookups.removeAt(index);
    }
  }

  onSubmit() {
    // check if  current operation is update
    if (this.lookupForm.valid) {
      console.log(this.lookupForm.value.Lookups);
      this.submitted.emit(this.lookupForm.value.Lookups);
    }
  }

  addRow(): void {
    this.Lookups.push(
      this.formBuilder.group({
        Id: [''],
        Type: ['', Validators.required],
        Value: ['', Validators.required]
      })
    );
  }
}
