import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  public items : Array<string> = [];
  public idUser : string;
  public NomDeLObjet :string ;

  public objet : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idUser = navParams.get("IDUSER")
    this.type =navParams.get("TYPE");
    this.rubrique = this.navParams.get("RUB");
    
    this.requete = "/Annonces/" + this.type + `/` + this.rubrique;
    const itemRef : firebase.database.Reference = firebase.database().ref(this.requete);
    //`/Annonces/`+ this.type +`/` + this.rubrique
    this.items = [];

    itemRef.on('value',ItemSnapshot=>{
      ItemSnapshot.forEach (ItemSnap => {
        this.items.push(ItemSnap.val());
        return false;
      });
    });
     
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfficheAnnoncePage');
    
  }

  choixF(obj){
    
    this.navCtrl.setRoot('LAnnoncePage',{IDUSER : this.idUser, OBJ :this.NomDeLObjet});
  }

  back(){
    this.navCtrl.setRoot('RechercheAnnoncePage',{IDUSER : this.idUser});
  }

}


