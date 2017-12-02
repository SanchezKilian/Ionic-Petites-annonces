import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public Username : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  this.Username = navParams.get("IDUSER");
  }


  goChercheAnnonce(){
    this.navCtrl.push('RechercheAnnoncePage',{IDUSER : this.Username});
  }
  goWriteAn()
  {
    let confirm = this.alertCtrl.create({
      title : "Type d'annonce : ",
      message : " Vous souhaitez demander ou proposer un service ?",
      buttons:[
          {
            text:'Demander',
            handler : ()=>{
              this.navCtrl.push('DemanderSPage',{IDUSER : this.Username});
            }
          },
          {
            text:'Proposer',
            handler : ()=>{
              this.navCtrl.push('ProposerSPage',{IDUSER : this.Username});
            }
          }
      ]
    });
    confirm.present();

    
  }
  gererAnnonces(){
    this.navCtrl.push('MesAnnoncesPage',{IDUSER : this.Username});
  }
  logOut(){
    this.navCtrl.setRoot(HomePage);
  }
}
