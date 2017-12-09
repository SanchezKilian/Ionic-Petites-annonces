import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

import {Toast} from '@ionic-native/toast'

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
  public actionP ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toast : Toast) {
  this.Username = navParams.get("IDUSER");
    this.actionP = navParams.get("ACTION");

    switch(this.actionP){
      case 1 :
        toast.show('i m a little toast','5000','center').subscribe(
          toast => {
            console.log(toast);
          }

        );
      break;
    }


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
