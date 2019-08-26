import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import {
  AuthenticationApiService,
  AuthorizationApiService,
  AuthorizationModel
} from '@bionic/apis/common/access-control-api';

import { Router } from '@angular/router';
import {
  SidebarComponent,
  TreeViewComponent,
  NodeSelectEventArgs,
  MenuEventArgs
} from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { LayoutOptionsService } from '../layout-options.service';

@Component({
  selector: 'bionic-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public securityObject: AuthorizationModel;

  @Input()
  public mainHeader = '';
  @Input()
  public subHeader = '';
  @Input()
  public privilage: boolean;
  @Output()
  public logOut: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private authorizeation: AuthorizationApiService,
    private navigationService: LayoutOptionsService
  ) {
    this.yearFields = { key: 'Year', value: 'Year' };
    this.field = {
      dataSource: this.navigationService.NAVIGATION_LINKS,
      id: 'id',
      text: 'name',
      child: 'subChild',
      expanded: 'expanded',
      selected: 'selected',
      enabled: 'enabled'
    };

    if (this.privilage) {
      for (
        let index = 1;
        index < this.navigationService.NAVIGATION_LINKS.length;
        index++
      ) {
        if (this.navigationService.NAVIGATION_LINKS[index].subChild) {
          for (
            let i =
              this.navigationService.NAVIGATION_LINKS[index].subChild.length -
              1;
            i > -1;
            i--
          ) {
            if (
              !this.authorizeation.hasClaim(
                this.navigationService.NAVIGATION_LINKS[index].subChild[i]
                  .privilage
              )
            ) {
              this.navigationService.NAVIGATION_LINKS[index].subChild.splice(
                i,
                1
              );
            }
          }

          if (
            this.navigationService.NAVIGATION_LINKS[index].subChild.length === 0
          ) {
            this.navigationService.NAVIGATION_LINKS.splice(index, 1);
            --index;
          }
        } else {
          if (
            !this.authorizeation.hasClaim(
              this.navigationService.NAVIGATION_LINKS[index].privilage
            )
          ) {
            this.navigationService.NAVIGATION_LINKS.splice(index, 1);
          }
        }
      }
    }
  }

  public navigationLinks = [];
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
    this.navigationLinks = this.navigationService.NAVIGATION_LINKS;
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
      this.logOut.emit(true);
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

  onLogOut() {
    this.logOut.emit(true);
  }
}
