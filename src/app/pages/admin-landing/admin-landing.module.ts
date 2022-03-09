import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLandingPageRoutingModule } from './admin-landing-routing.module';

import { AdminLandingPage } from './admin-landing.page';
import { NavComponent } from 'src/app/Components/nav/nav.component';
import { AddSubjectComponent } from 'src/app/Components/add-subject/add-subject.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLandingPageRoutingModule
  ],
  declarations: [AdminLandingPage, NavComponent, AddSubjectComponent]
})
export class AdminLandingPageModule {}
