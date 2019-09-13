import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { PageInformationsModule } from '@bionic/components/page-informations';
import { SecurityService } from '@bionic/services/security-service';

import { AuthenticationGuard } from './authentication.guard';
import { HttpClientModule } from '@angular/common/http';
import { AccessControlApiModule } from '@bionic/apis/common/access-control-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageInformationsModule,
    AccessControlApiModule,

    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './features/features.module#FeaturesModule',
        data: {
          breadCrum: '',
          claimType: 'canViewItems',
          title: 'Home'
        },
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'login',
        loadChildren: '@bionic/components/authentication#AuthenticationModule'
      }
    ])
  ],
  providers: [SecurityService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
