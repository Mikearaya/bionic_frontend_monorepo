import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { PageInformationsModule } from '@bionic/components/page-informations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageInformationsModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './features/features.module#FeaturesModule',
        data: {
          breadCrum: 'Items',
          claimType: 'canViewItems',
          title: 'Home'
        }
      }
    ]),
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
