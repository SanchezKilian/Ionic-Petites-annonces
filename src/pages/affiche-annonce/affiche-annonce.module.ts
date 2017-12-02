import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfficheAnnoncePage } from './affiche-annonce';

@NgModule({
  declarations: [
    AfficheAnnoncePage,
  ],
  imports: [
    IonicPageModule.forChild(AfficheAnnoncePage),
  ],
})
export class AfficheAnnoncePageModule {}
