import { Component, OnInit } from '@angular/core';
import { VehiclesApiService } from '@bionic/apis/rent/vehicles-api';

@Component({
  selector: 'bionic-vehicle-rent-view',
  templateUrl: './vehicle-rent-view.component.html',
  styleUrls: ['./vehicle-rent-view.component.css']
})
export class VehicleRentViewComponent implements OnInit {

  constructor(private vehiclesApi: VehiclesApiService) { }

  ngOnInit() {
  }

}
