import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bionic-default-print-button',
  template: `
    <button
      type="button"
      ejs-button
      (click)="print()"
      class="e-primary e-large d-print-none"
    >
      Print Reciept
    </button>
  `,
  styleUrls: ['./default-print-button.component.css']
})
export class DefaultPrintButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  print() {
    window.print();
  }
}
