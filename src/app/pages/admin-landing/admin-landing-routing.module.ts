import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubjectComponent } from 'src/app/Components/add-subject/add-subject.component';

import { AdminLandingPage } from './admin-landing.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLandingPage
  },
  {
    path: 'admin-landing/add-subject',
    component: AddSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLandingPageRoutingModule {}
