import { Component, OnInit } from '@angular/core';
import { BionicToolbarModel } from '@bionic/components/default-layout';

@Component({
  selector: 'bionic-entery',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor() {
    this.toolbarConfig = [
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'customers',
        text: 'Customers'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'customer-orders',
        text: 'Customer Orders'
      },
      { icon: 'e-icon e-menu-icon', routerLink: 'invoices', text: 'Invoices' }
    ];
  }
  public toolbarConfig: BionicToolbarModel[] = [];

  ngOnInit() {}
}
