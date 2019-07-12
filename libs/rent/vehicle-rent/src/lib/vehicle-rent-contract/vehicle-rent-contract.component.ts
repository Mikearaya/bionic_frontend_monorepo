import { Component, OnInit } from '@angular/core';
import { VehiclesApiService } from '@bionic/apis/rent/vehicles-api';
import {
  RentsApiService,
  RentContractModel
} from '@bionic/apis/rent/rents-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bionic-vehicle-rent-contract',
  templateUrl: './vehicle-rent-contract.component.html',
  styleUrls: ['./vehicle-rent-contract.component.css']
})
export class VehicleRentContractComponent implements OnInit {
  rentId: number;
  rentInfo: RentContractModel;
  constructor(
    private rentService: RentsApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rentId = +this.activatedRoute.snapshot.paramMap.get('rentId');
    if (this.rentId) {
      this.rentService
        .getRentContract(this.rentId)
        .subscribe((data: RentContractModel) => {
          this.rentInfo = data;
        });
    }
  }

  printContrat() {
    window.print();
  }
}
