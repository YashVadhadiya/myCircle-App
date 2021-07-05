import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuddyProfilePage } from './buddy-profile.page';

const routes: Routes = [
  {
    path: '',
    component: BuddyProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuddyProfilePageRoutingModule {}
