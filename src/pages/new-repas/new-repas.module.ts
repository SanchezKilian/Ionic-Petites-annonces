import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRepasPage } from './new-repas';

@NgModule({
  declarations: [
    NewRepasPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRepasPage),
  ],
})
export class NewRepasPageModule {}
