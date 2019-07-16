import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  SecurityService,
  AppUserAuth
} from '@bionic/services/security-service';
import { NAVIGATION_LINKS } from '../navigation-data.model';
import {
  SidebarComponent,
  TreeViewComponent,
  NodeSelectEventArgs
} from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import {
  AuthenticationApiService,
  AuthorizationApiService,
  AuthorizationModel
} from '@bionic/apis/common/access-control-api';

@Component({
  selector: 'bionic-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  public securityObject: AuthorizationModel;
  constructor(
    private router: Router,
    private securityService: AuthenticationApiService,
    private authorizeation: AuthorizationApiService
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
    for (let index = 1; index < NAVIGATION_LINKS.length; index++) {
      if (NAVIGATION_LINKS[index].subChild) {
        for (let i = NAVIGATION_LINKS[index].subChild.length - 1; i > -1; i--) {
          if (
            !this.authorizeation.hasClaim(
              NAVIGATION_LINKS[index].subChild[i].privilage
            )
          ) {
            NAVIGATION_LINKS[index].subChild.splice(i, 1);
          }
        }

        if (NAVIGATION_LINKS[index].subChild.length === 0) {
          NAVIGATION_LINKS.splice(index, 1);
          --index;
        }
      } else {
        if (!this.authorizeation.hasClaim(NAVIGATION_LINKS[index].privilage)) {
          NAVIGATION_LINKS.splice(index, 1);
        }
      }
    }
  }

  public navigationLinks = NAVIGATION_LINKS;
  @ViewChild('sidebar')
  public sidebar: SidebarComponent;
  public type = 'Auto';
  public target = '.content';
  @ViewChild('tree')
  public tree: TreeViewComponent;
  @ViewChild('togglebtn')
  public togglebtn: ButtonComponent;

  public field: object;
  public yearFields: { key: string; value: string };

  ngOnInit(): void {
    this.securityObject = this.authorizeation.securityObject;
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

  logOut() {
    this.securityService.logOut();
  }
}
