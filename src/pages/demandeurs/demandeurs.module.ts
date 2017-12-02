import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemandeursPage } from './demandeurs';

@NgModule({
  declarations: [
    DemandeursPage,
  ],
  imports: [
    IonicPageModule.forChild(DemandeursPage),
  ],
})
export class DemandeursPageModule {}
