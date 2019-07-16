import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PageInformationsModule } from '@bionic/components/page-informations';
import { SecurityService } from '@bionic/services/security-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageInformationsModule,
    ButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './features/features.module#FeaturesModule',
        data: { breadCrum: 'home' }
      },
      {
        path: 'login',
        loadChildren: '@bionic/components/authentication#AuthenticationModule'
      }
    ])
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
