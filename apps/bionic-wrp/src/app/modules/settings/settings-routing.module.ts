import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    children: [
      { path: 'users', loadChildren: '@bionic/wrp/users#UsersModule' },
      { path: 'roles', loadChildren: '@bionic/wrp/roles#RolesModule' },
      {
        path: 'system-lookup',
        loadChildren: '@bionic/wrp/system-lookup#SystemLookupModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
