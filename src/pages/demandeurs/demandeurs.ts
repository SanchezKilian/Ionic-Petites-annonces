import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DemandeursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demandeurs',
  templateUrl: 'demandeurs.html',
})
export class DemandeursPage {

  public UserId;
  public IdAnnonce;
  public requete;
  public items;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.UserId = this.navParams.get("IDUSER");
    this.IdAnnonce = this.navParams.get("ANN");


    this.requete = "User/USERPI/"+this.UserId+"/RepAnnonce/"+this.IdAnnonce+"/Demandeur" ;
    const RefRep : firebase.database.Reference = firebase.database().ref(this.requete);
    this.items = [];
    RefRep.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.items.push(ItemSnap.val());
        return false;
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemandeursPage');
  }

  choix(NOM,MAIL){
    let confirm = this.alertCtrl.create({
      title : "Adresse mail du demandeur : ",
      message : MAIL,
      buttons:[
          {
            text:'OK',
            handler : ()=>{
              this.navCtrl.setRoot('MenuPage',{IDUSER : this.UserId, ACTION : 2});
            }
          }
      ]
    });
    confirm.present();
  }
}
