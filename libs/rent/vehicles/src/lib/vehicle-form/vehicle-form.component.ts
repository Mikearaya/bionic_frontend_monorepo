import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  VehiclesApiService,
  VehicleViewModel,
  Vehicle
} from '@bionic/apis/rent/vehicles-api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup;
  isUpdate: boolean;
  transmissionTypes = ['Automatic', 'Manual'];
  plateCodes = ['2', '3'];
  fuielTypes = ['Benzine', 'Diesel'];
  Years: string[] = [];

  private vehicleId: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private vehicleApi: VehiclesApiService
  ) {
    this.createForm();
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i > currentYear - 30; i--) {
      this.Years.push(i.toString());
    }
  }

  ngOnInit() {
    this.vehicleId = +this.activatedRoute.snapshot.paramMap.get('vehicleId');

    if (this.vehicleId) {
      this.isUpdate = true;
      this.vehicleApi
        .getVehicleById(this.vehicleId)
        .subscribe(
          (vehicle: VehicleViewModel) => this.initializeForm(vehicle),
          (error: HttpErrorResponse) => alert(error.message)
        );
    }
  }

  private createForm(): void {
    this.vehicleForm = this.formBuilder.group({
      OwnerId: [''],
      Make: ['', Validators.required],
      Model: ['', Validators.required],
      YearMade: ['', Validators.required],
      Color: ['', Validators.required],
      Type: ['', Validators.required],
      ChassisNumber: [''],
      MotorNumber: [''],
      FuielType: ['', Validators.required],
      Cc: [''],
      TotalPassanger: [''],
      CylinderCount: [''],
      LibreNo: [''],
      PlateCode: ['', Validators.required],
      PlateNumber: ['', Validators.required],
      Transmission: ['', Validators.required]
    });
  }

  private initializeForm(vehicle: VehicleViewModel): void {
    this.vehicleForm = this.formBuilder.group({
      OwnerId: [vehicle.OwnerId],
      Make: [vehicle.Make, Validators.required],
      Model: [vehicle.Model, Validators.required],
      YearMade: [vehicle.YearMade, Validators.required],
      Color: [vehicle.Color, Validators.required],
      Type: [vehicle.Type, Validators.required],
      ChassisNumber: [vehicle.ChassisNumber],
      MotorNumber: [vehicle.MotorNumber],
      FuielType: [vehicle.FuielType, Validators.required],
      Cc: [vehicle.Cc],
      TotalPassanger: [vehicle.TotalPassanger],
      CylinderCount: [vehicle.CylinderCount],
      LibreNo: [vehicle.LibreNo],
      PlateCode: [vehicle.PlateCode, Validators.required],
      PlateNumber: [vehicle.PlateNumber, Validators.required],
      Transmission: [vehicle.Transmission, Validators.required]
    });
  }

  get OwnerId(): FormControl {
    return this.vehicleForm.get('OwnerId') as FormControl;
  }

  get Make(): FormControl {
    return this.vehicleForm.get('Make') as FormControl;
  }

  get Model(): FormControl {
    return this.vehicleForm.get('Model') as FormControl;
  }

  get YearMade(): FormControl {
    return this.vehicleForm.get('YearMade') as FormControl;
  }
  get Color(): FormControl {
    return this.vehicleForm.get('Color') as FormControl;
  }

  get Type(): FormControl {
    return this.vehicleForm.get('Type') as FormControl;
  }

  get ChassisNumber(): FormControl {
    return this.vehicleForm.get('ChassisNumber') as FormControl;
  }

  get MotorNumber(): FormControl {
    return this.vehicleForm.get('MotorNumber') as FormControl;
  }

  get FuielType(): FormControl {
    return this.vehicleForm.get('FuielType') as FormControl;
  }

  get Cc(): FormControl {
    return this.vehicleForm.get('Cc') as FormControl;
  }
  get CylinderCount(): FormControl {
    return this.vehicleForm.get('CylinderCount') as FormControl;
  }
  get LibreNo(): FormControl {
    return this.vehicleForm.get('LibreNo') as FormControl;
  }

  get PlateCode(): FormControl {
    return this.vehicleForm.get('PlateCode') as FormControl;
  }

  get PlateNumber(): FormControl {
    return this.vehicleForm.get('PlateNumber') as FormControl;
  }
  get TotalPassanger(): FormControl {
    return this.vehicleForm.get('TotalPassanger') as FormControl;
  }

  get Transmission(): FormControl {
    return this.vehicleForm.get('Transmission') as FormControl;
  }

  onSubmit(): void {
    const vehicleData = this.prepareData(this.vehicleForm);

    if (this.isUpdate && vehicleData) {
      this.vehicleApi.updateVehicle(vehicleData).subscribe(
        () => {
          alert('Vehicle updated Successfuly');
          this.vehicleForm.reset();
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
    } else if (vehicleData) {
      this.vehicleApi.addVehicle(vehicleData).subscribe(
        (vehicle: VehicleViewModel) => {
          this.vehicleForm.reset();
          alert('Vehicle added Successfuly');
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
    }
  }

  private prepareData(form: FormGroup): Vehicle | null {
    if (form.valid) {
      const vehicle: Vehicle = {
        OwnerId: this.OwnerId.value,
        Make: this.Make.value,
        Model: this.Model.value,
        Cc: this.Cc.value,
        ChassisNumber: this.ChassisNumber.value,
        Color: this.Color.value,
        CylinderCount: this.CylinderCount.value,
        FuielType: this.FuielType.value,
        LibreNo: this.LibreNo.value,
        MotorNumber: this.MotorNumber.value,
        PlateCode: this.PlateCode.value,
        PlateNumber: this.PlateNumber.value,
        TotalPassanger: this.TotalPassanger.value,
        Transmission: this.Transmission.value,
        Type: this.Type.value,
        YearMade: this.YearMade.value
      };

      if (this.vehicleId) {
        vehicle.Id = this.vehicleId;
      }

      return vehicle;
    } else {
      return null;
    }
  }
}
