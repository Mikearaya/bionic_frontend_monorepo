import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { PageIdentityComponent } from './page-identity/page-identity.component';
import { PrintHeaderComponent } from './print-header/print-header.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    PageTitleComponent,
    PrintHeaderComponent,
    PageIdentityComponent,
    BreadCrumbComponent
  ],
  exports: [
    PageTitleComponent,
    PrintHeaderComponent,
    PageIdentityComponent,
    BreadCrumbComponent
  ]
})
export class PageInformationsModule {}
