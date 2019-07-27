import { Component, OnInit } from '@angular/core';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { Subject } from 'rxjs';
import { CustomGridColumns, QueryString } from '@bionic/components/data-grid';
import { OperationsApiService } from '@bionic/apis/shipment/operations-api';
import { FreightOrderApiService } from '@bionic/apis/shipment/freight-order-api';

@Component({
  selector: 'bionic-freight-order-view',
  templateUrl: './freight-order-view.component.html',
  styleUrls: ['./freight-order-view.component.css']
})
export class FreightOrderViewComponent implements OnInit {
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
      key: 'OperationId',
      header: 'Operation',
      visible: true,
      type: 'number',
      width: 40
    },
    {
      key: 'CustomerName',
      header: 'Customer',
      visible: true,
      width: 100,
      type: 'string'
    },
    {
      key: 'VehiclePlate',
      header: 'Vehicle',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'TrailorPlate',
      header: 'Trailor',
      visible: false,
      width: 50,
      type: 'string'
    },
    {
      key: 'CargoType',
      header: 'Cargo',
      visible: true,
      width: 70,
      type: 'string'
    },
    {
      key: 'Weight',
      header: 'Weight',
      visible: false,
      width: 100,
      type: 'number',
      format: 'N2'
    },
    {
      key: 'Distance',
      header: 'Distance',
      visible: false,
      width: 100,
      type: 'number',
      format: 'N2'
    },
    {
      key: 'Price',
      header: 'Price',
      visible: false,
      width: 100,
      type: 'number',
      format: 'C2'
    },
    {
      key: 'DriverCost',
      header: 'Driver Cost',
      visible: false,
      width: 100,
      type: 'C2'
    },
    {
      key: 'ArrShipper',
      header: 'Arr @ Shipper',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'LoadingCompleted',
      header: 'Loaded',
      visible: true,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'ArrConsignee',
      header: 'Arr @ Consignee',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'UnloadingCompleted',
      header: 'Unloaded',
      visible: true,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'Status',
      header: 'Status',
      visible: true,
      width: 50,
      type: 'string'
    },
    {
      key: 'ShippedBy',
      header: 'Shipped By',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'ConsigneeBy',
      header: 'Consignee',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'Driver',
      header: 'Driver',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'DispatchCompletedOn',
      header: 'Completed',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'FreightOrderNo',
      header: 'FreightOrderNo',
      visible: true,
      width: 70,
      type: 'string'
    },
    {
      key: 'WayBillNo',
      header: 'Waybill',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'DispatcherName',
      header: 'Dispatcher',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'StartPoint',
      header: 'Start',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'Destination',
      header: 'Destination',
      visible: false,
      width: 100,
      type: 'string'
    },
    {
      key: 'DateAdded',
      header: 'Added',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    },
    {
      key: 'DateUpdated',
      header: 'Updated',
      visible: false,
      width: 50,
      type: 'date',
      format: 'yMd'
    }
  ];

  constructor(private freightOrderApi: FreightOrderApiService) {
    this.data = this.freightOrderApi;
    this.freightOrderApi.execute(new QueryString());
  }

  ngOnInit() {
    this.freightOrderApi.execute(new QueryString());
  }

  deleteFreightOrders(data: any) {
    this.freightOrderApi
      .deleteFreightOrder(data['Id'])
      .subscribe(() => alert('Freight Order delete successfuly'));
  }

  onDataStateChange(state: QueryString): void {
    this.freightOrderApi.execute(state);
  }
}
