import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Repas} from '../../model/Repas'


@IonicPage()
@Component({
  selector: 'page-new-repas',
  templateUrl: 'new-repas.html',
})
export class NewRepasPage {

  private idUser : string;
  private newR : Repas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.idUser = navParams.get("IDUSER")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRepasPage');
  }

  Valider(myDate : string, Lieu : string, participation : number, entree : string, plat: string, dessert: string, nbPart : number, intit : string){
    this.newR  = new Repas(intit,myDate,Lieu,participation,entree,plat,dessert,nbPart,this.idUser);
    this.newR.send();
    this.navCtrl.setRoot('MenuPage',{IDUSER : this.idUser, ACTION : 1}); 
  }

}
