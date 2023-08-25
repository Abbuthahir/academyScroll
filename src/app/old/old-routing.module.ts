import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldPage } from './old.page';

const routes: Routes = [
  {
    path: '',
    component: OldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldPageRoutingModule {}
