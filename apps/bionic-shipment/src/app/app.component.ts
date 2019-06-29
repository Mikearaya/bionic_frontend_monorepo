import { Component, ViewChild } from '@angular/core';
import {
  SidebarComponent,
  TreeViewComponent,
  NodeSelectEventArgs,
  MenuEventArgs
} from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';
import { Router } from '@angular/router';
import {
  SecurityService,
  AppUserAuth
} from '@bionic/services/security-service';
import { NAVIGATION_LINKS } from './navigation-data.model';

@Component({
  selector: 'bionic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public securityObject: AppUserAuth;

  public cssClass = 'custom';

  public items: ItemModel[] = [
    {
      text: 'Sign out'
    }
  ];
  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {
    this.yearFields = { key: 'Year', value: 'Year' };
    this.field = {
      dataSource: NAVIGATION_LINKS,
      id: 'id',
      text: 'name',
      child: 'subChild',
      expanded: 'expanded',
      selected: 'selected',
      enabled: 'enabled'
    };
  }

  @ViewChild('sidebar')
  public sidebar: SidebarComponent;
  public type = 'Auto';
  public target = '.content';
  @ViewChild('tree')
  public tree: TreeViewComponent;
  @ViewChild('togglebtn')
  public togglebtn: ButtonComponent;

  public smartAccountingLinks: object[] = NAVIGATION_LINKS;

  public field: object;
  public yearFields: { key: string; value: string };

  ngOnInit(): void {
    this.securityObject = this.securityService.securityObject;
  }

  public loadRoutingContent(args: NodeSelectEventArgs): void {
    const data: any = this.tree.getTreeData(args.node);
    const routerLink: string = data[0].url;

    if (routerLink !== 'parent') {
      this.router.navigate([routerLink]);
    }
  }

  public select(args: MenuEventArgs) {
    if (args.item.text === 'Sign out') {
      this.securityService.logOut();
    }
  }

  btnClick() {
    if (this.togglebtn.element.classList.contains('e-active')) {
      this.togglebtn.content = '';
      this.sidebar.show();
    } else {
      this.togglebtn.content = '';
      this.sidebar.hide();
    }
  }
}
