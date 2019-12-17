import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./features/features.module').then(
              mod => mod.FeaturesModule
            ),
          data: { breadCrum: 'home' }
        },
        {
          path: 'login',
          loadChildren: () =>
            import('@bionic/components/authentication').then(
              mod => mod.AuthenticationModule
            )
        }
        /*
        {
          path: '',
          loadChildren: './features/features.module#FeaturesModule',
          data: { breadCrum: 'home' }
        },
        {
          path: 'login',
          loadChildren: '@bionic/components/authentication#AuthenticationModule'
        } */
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* {
          path: '',
          loadChildren: () =>
            import('./features/features.module').then(
              mod => mod.FeaturesModule
            ),
          data: { breadCrum: 'home' }
        },
        {
          path: 'login',
          loadChildren: () =>
            import('@bionic/components/authentication').then(
              mod => mod.AuthenticationModule
            )
        } */
