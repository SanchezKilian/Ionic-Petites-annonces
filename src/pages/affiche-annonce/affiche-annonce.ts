import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import firebase from 'firebase';


/**
 * Generated class for the AfficheAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affiche-annonce',
  templateUrl: 'affiche-annonce.html', 
})
export class AfficheAnnoncePage {
  public type : string;
  public rubrique : string;
  
  public requete : string;

  public itemC : Array<string> = [];
  public itemL : Array<string> = [];
  public itemM : Array<string> = [];
  public itemR : Array<string> = [];
  public itemCo : Array<string> = [];
  
  public idUser : string;
  public NomDeLObjet :string ;


  public  idSlide = 25;
  @ViewChild(Slides) slides: Slides;
  
  public objet : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idUser = navParams.get("IDUSER")
    this.type =navParams.get("TYPE");
    this.rubrique = this.navParams.get("RUB");
    
    


    this.requete = "/Annonces/" + this.type + "/cours";
    const itemRef : firebase.database.Reference = firebase.database().ref(this.requete);
    //`/Annonces/`+ this.type +`/` + this.rubrique
    this.itemC = [];

    itemRef.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.itemC.push(ItemSnap.val());
        return false;
      });
    });


    this.requete = "/Annonces/" + this.type + "/livre";
    const itemRefL : firebase.database.Reference = firebase.database().ref(this.requete);
    //`/Annonces/`+ this.type +`/` + this.rubrique
    this.itemL = [];

    itemRefL.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.itemL.push(ItemSnap.val());
        return false;
      });
    });

    this.requete = "/Annonces/" + this.type + "/mobilier";
    const itemRefM : firebase.database.Reference = firebase.database().ref(this.requete);
    //`/Annonces/`+ this.type +`/` + this.rubrique
    this.itemM = [];

    itemRefM.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.itemM.push(ItemSnap.val());
        return false;
      });
    });

    this.requete = "/Annonces/" + this.type + "/repas";
    const itemRefR : firebase.database.Reference = firebase.database().ref(this.requete);
    //`/Annonces/`+ this.type +`/` + this.rubrique
    this.itemR = [];

    itemRefR.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.itemR.push(ItemSnap.val());
        return false;
      });
    });

    this.requete = "/Annonces/" + this.type + "/coloc";
    const itemRefCo : firebase.database.Reference = firebase.database().ref(this.requete);
    //`/Annonces/`+ this.type +`/` + this.rubrique
    this.itemCo = [];

    itemRefCo.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.itemCo.push(ItemSnap.val());
        return false;
      });
    });

     
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfficheAnnoncePage');
    
  }

  choixF(abj,obj,idAnnonce,titre){ //,obj
    
    this.navCtrl.push('LAnnoncePage',{IDUSER : this.idUser,ITEM : abj, OBJ :obj, IDANNONCE : idAnnonce, TITRE : titre});//, OBJ :obj
  }




  Add(){
    if(this.type =="Demander"){
      this.navCtrl.push('ProposerSPage',{IDUSER : this.idUser});
    }
    else{
      this.navCtrl.push('DemanderSPage',{IDUSER : this.idUser});
    }
  }
  /*
  AddL(){
    if(this.type =="Demander"){
      this.navCtrl.push('ProposerSPage',{IDUSER : this.idUser});
    }
    else{
      this.navCtrl.push('DemanderSPage',{IDUSER : this.idUser});
    }
  }
  AddM(){
    if(this.type =="Demander"){
      this.navCtrl.push('ProposerSPage',{IDUSER : this.idUser});
    }
    else{
      this.navCtrl.push('DemanderSPage',{IDUSER : this.idUser});
    }
  }
  */
  AdRC(){
    this.navCtrl.push('NewRepasPage',{IDUSER : this.idUser});
  }
  /*
  AddCol(){
    if(this.type =="Demander"){
      this.navCtrl.push('ProposerSPage',{IDUSER : this.idUser});
    }
    else{
      this.navCtrl.push('DemanderSPage',{IDUSER : this.idUser});
    }
  }
  */


}


