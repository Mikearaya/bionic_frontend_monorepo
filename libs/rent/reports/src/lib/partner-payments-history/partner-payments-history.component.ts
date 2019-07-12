import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GridComponent,
  GridModel,
  DataStateChangeEventArgs
} from '@syncfusion/ej2-angular-grids';
import { PartnerPaymentsReportApiService } from '@bionic/apis/rent/reports-api';
import { map } from 'rxjs/operators';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar';
import { Subject } from 'rxjs';

@Component({
  selector: 'bionic-partner-payments-history',
  templateUrl: './partner-payments-history.component.html',
  styleUrls: ['./partner-payments-history.component.css']
})
export class PartnerPaymentsHistoryComponent implements OnInit {
  public data: Subject<DataStateChangeEventArgs>;

  @ViewChild('grid')
  public grid: GridComponent;

  public pData: object[];
  public childGrid: GridModel = {
    queryString: 'RentId',
    columns: [
      {
        field: 'Amount',
        headerText: 'Amount',
        type: 'number',
        format: 'N2',
        textAlign: 'Center',
        width: 120
      },
      {
        field: 'Date',
        headerText: 'Date',
        width: 150,
        type: 'date',
        format: 'yMd'
      }
    ],
    aggregates: [
      {
        columns: [
          {
            type: 'Sum',
            field: 'Amount',
            format: 'N2',
            footerTemplate: 'Total ${Sum}'
          }
        ]
      }
    ]
  };
  initialPage = {
    pageSize: 50,
    pageSizes: [50, 100, 200, 300, 400]
  };
  filterOptions: { type: string };
  toolbar: { text: string; prefixIcon: string; id: string }[];
  constructor(private partnerPaymentsApi: PartnerPaymentsReportApiService) {
    this.data = this.partnerPaymentsApi;
    this.partnerPaymentsApi.execute({ skip: 0, take: 50 });
    this.filterOptions = { type: 'Menu' };

    this.toolbar = [
      { text: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
      { text: 'Collapse All', prefixIcon: 'e-collapse', id: 'collapseall' },
      { text: 'Print', prefixIcon: 'e-print', id: 'print' },
      {
        text: 'ExcelExport',
        prefixIcon: 'e-Excel_Export',
        id: 'Grid_excelexport'
      }
    ];
  }

  ngOnInit() {
    this.data
      .pipe(
        map((response: any) => {
          const history = [];
          response.result.forEach(element => {
            element.Payments.forEach(detail => {
              history.push(detail);
            });
          });
          return history;
        })
      )
      .subscribe(e => (this.childGrid.dataSource = e));
    this.partnerPaymentsApi.execute({ skip: 0, take: 50 });
  }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.id === 'expandall') {
      this.grid.detailRowModule.expandAll();
    }

    if (args.item.id === 'collapseall') {
      this.grid.detailRowModule.collapseAll();
    }
    if (args.item.id === 'print') {
      this.grid.detailRowModule.expandAll();
      setTimeout(() => {
        window.print();
      }, 1000);
    }
    if (args.item.id === 'Grid_excelexport') {
      const currentPageSize = this.grid.pageSettings.pageSize;
      this.grid.pageSettings.pageSize = this.grid.pageSettings.totalRecordsCount;
      this.grid.detailRowModule.expandAll();
      setTimeout(() => {
        this.grid.excelExport();
        this.grid.pageSettings.pageSize = currentPageSize;
      }, 1000);
    }
  }
  expand(): void {
    this.grid.detailRowModule.expandAll();
  }

  onDataStateChange(state: DataStateChangeEventArgs): void {
    this.partnerPaymentsApi.execute(state);
  }
}
