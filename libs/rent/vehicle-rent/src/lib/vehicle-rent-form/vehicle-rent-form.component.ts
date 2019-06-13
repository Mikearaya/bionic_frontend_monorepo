import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehiclesApiService } from '@bionic/apis/rent/vehicles-api';

@Component({
  selector: 'bionic-vehicle-rent-form',
  templateUrl: './vehicle-rent-form.component.html',
  styleUrls: ['./vehicle-rent-form.component.css']
})
export class VehicleRentFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private vehiclesApi: VehiclesApiService) { }

  ngOnInit() {
  }

}
