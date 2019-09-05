import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AuthorizationGuard } from '@bionic/apis/common/access-control-api';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    data: { breadCrum: 'Home' },
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
