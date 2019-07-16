import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecurityService } from '@bionic/services/security-service';
import { DynamicFormControlsModule } from '@bionic/components/dynamic-form-controls';

import { AuthenticationGuard } from './authentication.guard';
import { PageInformationsModule } from '@bionic/components/page-informations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DynamicFormControlsModule,
    PageInformationsModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: './features/features.module#FeaturesModule',
        data: { breadCrum: 'home' },
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
