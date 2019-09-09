import { Component, OnInit, Input } from '@angular/core';
import { BionicToolbarModel } from '../models/tool-bar.model';

@Component({
  selector: 'bionic-toolbar',
  template: `
    <ejs-toolbar>
      <e-items>
        <e-item
          *ngFor="let config of configuration; let i = index"
          [prefixIcon]="config.icon"
          [routerLinkActive]="'active-link inactive-link'"
          [routerLink]="config.routerLink"
          [text]="config.text"
        ></e-item>
      </e-items>
    </ejs-toolbar>
  `,
  styleUrls: ['./bionic-toolbar.component.css']
})
export class BionicToolbarComponent implements OnInit {
  @Input()
  public configuration: BionicToolbarModel[] = [];
  constructor() {}

  ngOnInit() {}
}
