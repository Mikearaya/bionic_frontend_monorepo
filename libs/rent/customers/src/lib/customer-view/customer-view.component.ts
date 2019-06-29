import { Component, OnInit } from '@angular/core';
import { CustomersApiService } from '@bionic/apis/rent/customer-api';
import { Subject } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

import { QueryString, CustomGridColumns } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  data: Subject<DataStateChangeEventArgs>;

  public columnBluePrint: CustomGridColumns[] = [
    {
      key: 'Id',
      header: 'Id',
      visible: false,
      width: 40,
      type: 'number'
    },
    {
      key: 'CustomerName',
      header: 'Customer Name',
      visible: true,
      type: 'string',
      width: 150
    },
    {
      key: 'MobileNumber',
      header: 'Main Phone',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'OtherPhone',
      header: 'Other Phone',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'DrivingLicenceId',
      header: 'Drivering License',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'PassportNumber',
      header: 'Passport',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'Country',
      header: 'Country',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'City',
      header: 'City',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'Nationality',
      header: 'Nationality',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'HouseNo',
      header: 'House No.',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'HotelName',
      header: 'HotelName',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'HotelNumber',
      header: 'Hotel Number',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'DateAdded',
      header: 'Added',
      visible: false,
      width: 100,
      format: 'dYm',
      type: 'datetime'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 100,
      format: 'dYm',
      type: 'datetime'
    }
  ];
  constructor(private customerApi: CustomersApiService) {
    this.data = this.customerApi;
    this.customerApi.execute(new QueryString());
  }

  ngOnInit() {
    this.customerApi.execute(new QueryString());
  }
  onDataStateChange(state: QueryString): void {
    this.customerApi.execute(state);
  }

  deleteCustomer(data: any) {
    this.customerApi.deleteCustomer(data['Id']).subscribe(
      () => {},
      () => {
        alert(
          "Can not delete Customer because it's been used in a transaction"
        );
      }
    );
  }
}
