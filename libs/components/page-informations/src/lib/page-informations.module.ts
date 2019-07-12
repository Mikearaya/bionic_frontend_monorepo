import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { PageIdentityComponent } from './page-identity/page-identity.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { PrintHeadersModule } from './print-headers/print-headers.module';

@NgModule({
  imports: [CommonModule, RouterModule, PrintHeadersModule],
  declarations: [
    PageTitleComponent,
    PageIdentityComponent,
    BreadCrumbComponent
  ],
  exports: [PageTitleComponent, PageIdentityComponent, BreadCrumbComponent]
})
export class PageInformationsModule {}
