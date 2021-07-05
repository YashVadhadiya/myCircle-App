import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuddyProfilePageRoutingModule } from './buddy-profile-routing.module';

import { BuddyProfilePage } from './buddy-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuddyProfilePageRoutingModule
  ],
  declarations: [BuddyProfilePage]
})
export class BuddyProfilePageModule {}
