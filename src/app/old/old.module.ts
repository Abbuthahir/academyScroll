import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldPageRoutingModule } from './old-routing.module';

import { OldPage } from './old.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldPageRoutingModule
  ],
  declarations: [OldPage]
})
export class OldPageModule {}
