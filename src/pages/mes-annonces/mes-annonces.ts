import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the MesAnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-annonces',
  templateUrl: 'mes-annonces.html',
})
export class MesAnnoncesPage {
  public Username;
  public requete : string;
  public IdUser;
  public items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.Username = this.navParams.get("IDUSER");
  
  this.requete = "User/USERPN/"+this.Username+"/ID" ;
  const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
  PassRef.on('value',PassSnapshot=>{
    this.IdUser = PassSnapshot.val(); 
  });

  this.requete = "User/USERPI/"+this.IdUser+"/RepAnnonce" ;
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
    console.log('ionViewDidLoad MesAnnoncesPage');
  }


  choix(Annonce){
    this.navCtrl.push('DemandeursPage',{IDUSER : this.IdUser,ANN : Annonce});
  }
}
