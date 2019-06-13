import { Component, OnInit } from '@angular/core';
import { CustomersApiService } from '@bionic/apis/rent/customer-api';

@Component({
  selector: 'bionic-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private customersApi: CustomersApiService) { }

  ngOnInit() {
  }

}
