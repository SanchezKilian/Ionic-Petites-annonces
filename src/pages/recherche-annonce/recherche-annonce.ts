import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RechercheAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recherche-annonce',
  templateUrl: 'recherche-annonce.html',
})
export class RechercheAnnoncePage {
  public idUser : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idUser = navParams.get("IDUSER")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechercheAnnoncePage');
  }

  Valider(type : string, rubrique : string){
    //var param = {type,rubrique};
    this.navCtrl.setRoot('AfficheAnnoncePage',{TYPE : type, RUB : rubrique,IDUSER : this.idUser});
  }
}
