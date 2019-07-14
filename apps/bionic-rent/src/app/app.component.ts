import { Component } from '@angular/core';

import { ItemModel, MenuEventArgs, Item } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'bionic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cssClass = 'custom';

  public items: ItemModel[] = [
    {
      text: 'Sign out'
    }
  ];

  constructor() {}
}
