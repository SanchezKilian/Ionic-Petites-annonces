import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LAnnoncePage } from './l-annonce';

@NgModule({
  declarations: [
    LAnnoncePage,
  ],
  imports: [
    IonicPageModule.forChild(LAnnoncePage),
  ],
})
export class LAnnoncePageModule {}
