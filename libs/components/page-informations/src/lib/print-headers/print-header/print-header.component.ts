import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bionic-print-header',
  template: `
    <div class="header">
      <div class="row">
        <div class="col-12">
          <p>{{ companyName }}</p>
          <p>{{ today | date }}</p>
          <p>{{ header }}</p>
          <p>{{ subTitle }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./print-header.component.css']
})
export class PrintHeaderComponent implements OnInit {
  public today = new Date();
  @Input() public header = '';
  @Input() public companyName = '';
  @Input() public subTitle = '';

  constructor() {}

  ngOnInit() {}
}
