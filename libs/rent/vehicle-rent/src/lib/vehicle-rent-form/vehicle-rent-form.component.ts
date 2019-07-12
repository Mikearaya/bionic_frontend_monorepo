import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  RentsApiService,
  VehicleRentView,
  VehicleCondition,
  VehicleRent
} from '@bionic/apis/rent/rents-api';
import { HttpErrorResponse } from '@angular/common/http';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'bionic-vehicle-rent-form',
  templateUrl: './vehicle-rent-form.component.html',
  styleUrls: ['./vehicle-rent-form.component.css']
})
export class VehicleRentFormComponent implements OnInit {
  private rentId: number;
  rentForm: FormGroup;
  isUpdate: boolean;
  public headerText: Object = [
    { text: 'Geral Information' },
    { text: 'Vehicle Conditions' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private rentApi: RentsApiService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.rentId = +this.activatedRoute.snapshot.paramMap.get('rentId');

    if (this.rentId) {
      this.isUpdate = true;
      this.rentApi
        .getRentById(this.rentId)
        .subscribe((rent: VehicleRentView) => this.initializeForm(rent));
    }
  }

  private createForm(): void {
    this.rentForm = this.formBuilder.group({
      VehicleId: ['', Validators.required],
      StartDate: ['', Validators.required],
      ReturnDate: [''],
      CustomerId: ['', Validators.required],
      OwnerRentingPrice: ['', Validators.required],
      RentedPrice: ['', Validators.required],
      CollateralDeposit: ['', Validators.required],
      VehicleCondition: this.createVehicleConditionForm()
    });
  }

  private createVehicleConditionForm(): FormGroup {
    return this.formBuilder.group({
      WindowController: 4,
      SeatBelt: 4,
      SpareTire: 1,
      Wiper: 2,
      CrickWrench: 1,
      DashboardClose: 0,
      MudeProtecter: 4,
      SpokioOuter: 2,
      SpokioInner: 1,
      SunVisor: 2,
      MatInner: 4,
      WindProtecter: 4,
      Blinker: 4,
      Radio: '',
      FuielLevel: '',
      CigaretLighter: 1,
      FuielLid: 1,
      RadiatorLid: 1,
      Crick: 1,
      Comment: '',
      TotalKilometer: ''
    });
  }

  private initializeForm(rent: VehicleRentView): void {
    this.rentForm = this.formBuilder.group({
      VehicleId: [rent.VehicleId, Validators.required],
      StartDate: [rent.StartDate, Validators.required],
      ReturnDate: [rent.ReturnDate],
      CustomerId: [rent.CustomerId, Validators.required],
      OwnerRentingPrice: [rent.OwnerRentingPrice, Validators.required],
      RentedPrice: [rent.RentedPrice, Validators.required],
      CollateralDeposit: [rent.ColateralDeposit, Validators.required],
      VehicleCondition: this.initializeVehicleConditionForm(
        rent.VehicleCondition
      )
    });
  }

  private initializeVehicleConditionForm(
    condition: VehicleCondition
  ): FormGroup {
    return this.formBuilder.group({
      WindowController: condition.WindowController,
      SeatBelt: condition.SeatBelt,
      SpareTire: condition.SpareTire,
      Wiper: condition.Wiper,
      CrickWrench: condition.CrickWrench,
      DashboardClose: condition.DashboardClose,
      MudeProtecter: condition.MudeProtecter,
      SpokioOuter: condition.SpokioOuter,
      SpokioInner: condition.SpokioInner,
      SunVisor: condition.SunVisor,
      MatInner: condition.MatInner,
      WindProtecter: condition.WindProtecter,
      Blinker: condition.Blinker,
      Radio: condition.Radio,
      FuielLevel: condition.FuielLevel,
      CigaretLighter: condition.CigaretLighter,
      FuielLid: condition.FuielLid,
      RadiatorLid: condition.RadiatorLid,
      Crick: condition.Crick,
      Comment: condition.Comment,
      TotalKilometer: condition.TotalKilometer
    });
  }

  getField(field: string): FormControl {
    return this.rentForm.get(field) as FormControl;
  }

  printContract(): void {
    this.router.navigate([`vehicle-rent/${this.rentId}/contract`]);
  }
  getCondition(condition: string): FormControl {
    return (this.rentForm.get('VehicleCondition') as FormGroup).get(
      condition
    ) as FormControl;
  }

  onSubmit(): void {
    const rentData = this.prepareData(this.rentForm);

    if (this.isUpdate && rentData) {
      this.rentApi.updateRent(rentData).subscribe(
        () => {
          alert('Rent Updated successfuly');
          this.rentForm.reset();
        },
        (error: HttpErrorResponse) =>
          alert('Unable to register rent please try again later')
      );
    } else if (rentData) {
      this.rentApi.addNewRent(rentData).subscribe(
        (rent: VehicleRentView) => {
          alert('Rent saved successfuly');
          this.rentId = rent.Id;
          this.isUpdate = true;
        },
        (error: HttpErrorResponse) =>
          alert('Unable to register rent please try again later')
      );
    }
  }

  private prepareData(form: FormGroup): VehicleRent | null {
    if (form.valid) {
      const condition: VehicleCondition = {
        WindowController: this.getCondition('WindowController').value,
        CrickWrench: this.getCondition('CrickWrench').value,
        DashboardClose: this.getCondition('DashboardClose').value,
        MudeProtecter: this.getCondition('MudeProtecter').value,
        SpokioInner: this.getCondition('SpokioInner').value,
        SpareTire: this.getCondition('SpareTire').value,
        SunVisor: this.getCondition('SunVisor').value,
        MatInner: this.getCondition('MatInner').value,
        WindProtecter: this.getCondition('WindProtecter').value,
        Blinker: this.getCondition('Blinker').value,
        Radio: this.getCondition('Radio').value,
        RadiatorLid: this.getCondition('RadiatorLid').value,
        FuielLevel: this.getCondition('FuielLevel').value,
        FuielLid: this.getCondition('FuielLid').value,
        CigaretLighter: this.getCondition('CigaretLighter').value,
        Crick: this.getCondition('Crick').value,
        Comment: this.getCondition('Comment').value,
        TotalKilometer: this.getCondition('TotalKilometer').value,
        SpokioOuter: this.getCondition('SpokioOuter').value,
        Wiper: this.getCondition('Wiper').value,
        SeatBelt: this.getCondition('SeatBelt').value
      };
      const rent: VehicleRent = {
        VehicleId: this.getField('VehicleId').value,
        CustomerId: this.getField('CustomerId').value,
        StartDate: this.getField('StartDate').value,
        ReturnDate: this.getField('ReturnDate').value,
        OwnerRentingPrice: this.getField('OwnerRentingPrice').value,
        RentedPrice: this.getField('RentedPrice').value,
        ColateralDeposit: this.getField('CollateralDeposit').value,
        VehicleCondition: condition
      };

      if (this.rentId) {
        rent.Id = this.rentId;
      }

      return rent;
    } else {
      return null;
    }
  }
}
