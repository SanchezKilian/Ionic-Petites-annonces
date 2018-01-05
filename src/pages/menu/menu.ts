import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


import firebase from 'firebase';
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
  public DataRécup;

  public requete;
  
  public Aitems : Array<string> = [];

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  this.Username = navParams.get("IDUSER");
    this.actionP = navParams.get("ACTION");
    

    
       
    this.requete = "/Annonces/last";
    const itemRefM : firebase.database.Reference = firebase.database().ref(this.requete);
    this.Aitems = [];
    itemRefM.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.Aitems.push(ItemSnap.val());
        return false;
      });
    });
    




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

  postuler(item : Array<string> ,itemID : string, itemIDAnnonce : string ,itemtitre : string){
    this.navCtrl.setRoot('LAnnoncePage',{IDUSER : this.Username,ITEM : item, OBJ :itemID, IDANNONCE : itemIDAnnonce, TITRE : itemtitre});
  }

  AutresAnnonces(itemtype : string, itemRubrique : string){
    this.navCtrl.setRoot('AfficheAnnoncePage',{TYPE : itemtype, RUB : itemRubrique,IDUSER : this.Username});
  }

}
