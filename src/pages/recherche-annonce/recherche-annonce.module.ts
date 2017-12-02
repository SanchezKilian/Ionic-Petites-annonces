import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercheAnnoncePage } from './recherche-annonce';

@NgModule({
  declarations: [
    RechercheAnnoncePage,
  ],
  imports: [
    IonicPageModule.forChild(RechercheAnnoncePage),
  ],
})
export class RechercheAnnoncePageModule {}
