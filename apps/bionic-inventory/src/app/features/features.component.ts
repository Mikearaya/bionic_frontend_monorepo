import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { AuthenticationApiService } from '@bionic/apis/common/access-control-api';

@Component({
  selector: 'bionic-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  constructor(private securityService: AuthenticationApiService) {}

  ngOnInit(): void {}

  public select(args: MenuEventArgs) {
    if (args.item.text === 'Sign out') {
      this.securityService.logOut();
    }
  }

  logOut() {
    this.securityService.logOut();
  }
}
