import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentHistoryComponent } from './rent-history/rent-history.component';

const routes: Routes = [
  {
    path: '',
    component: RentHistoryComponent,
    data: { breadCrum: 'Rent History', claim: 'canViewRentHistory' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentHistoryRoutingModule {}
