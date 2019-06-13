import { Component, OnInit } from '@angular/core';
import { VehiclesApiService } from '@bionic/apis/rent/vehicles-api';

@Component({
  selector: 'bionic-vehicle-rent-contract',
  templateUrl: './vehicle-rent-contract.component.html',
  styleUrls: ['./vehicle-rent-contract.component.css']
})
export class VehicleRentContractComponent implements OnInit {

  constructor(private vehiclesApi: VehiclesApiService) { }

  ngOnInit() {
  }

}
