import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  SidebarModule,
  TreeViewAllModule
} from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PageInformationsModule } from '@bionic/components/page-informations';
import { SecurityService } from '@bionic/services/security-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageInformationsModule,
    SidebarModule,
    TreeViewAllModule,
    ButtonModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
