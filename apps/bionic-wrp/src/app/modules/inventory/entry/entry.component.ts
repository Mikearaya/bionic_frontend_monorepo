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
      { icon: 'e-icon e-menu-icon', routerLink: 'items', text: 'Items' },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'stock-batchs',
        text: 'Batchs'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'shipments',
        text: 'Shipments'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'write-offs',
        text: 'Write Off'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'stock-movements',
        text: 'Stock Movements'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'inventory',
        text: 'Inventory'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'critical-inventories',
        text: 'Critical Items'
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
