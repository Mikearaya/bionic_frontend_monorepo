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
      { icon: 'e-icon e-menu-icon', routerLink: 'vendors', text: 'Vendors' },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'purchase-orders',
        text: 'Purchase Orders'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'purchase-recievings',
        text: 'Purchase Recievings'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'purchase-terms',
        text: 'Purchase Terms'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'purchase-order-payments',
        text: 'Payments'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'settings',
        text: 'Settings'
      }
    ];
  }
  public toolbarConfig: BionicToolbarModel[] = [];

  ngOnInit() {}
}
