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
        { path: 'users', loadChildren: '@bionic/wrp/users#UsersModule' },
        { path: 'roles', loadChildren: '@bionic/wrp/roles#RolesModule' },
        {
          path: 'system-lookup',
          loadChildren: '@bionic/wrp/system-lookup#SystemLookupModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
