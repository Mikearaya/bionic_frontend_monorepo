import { Component, OnInit } from '@angular/core';
import { BionicToolbarModel } from '@bionic/components/default-layout';

@Component({
  selector: 'bionic-entery',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public toolbarConfig: BionicToolbarModel[] = [];

  constructor() {
    this.toolbarConfig = [
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'users',
        text: 'Users'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'roles',
        text: 'Roles'
      },
      {
        icon: 'e-icon e-menu-icon',
        routerLink: 'system-lookups',
        text: 'System Lookups'
      }
    ];
  }

  ngOnInit() {}
}
