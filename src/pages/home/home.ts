import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase';
import { NewAccountPage } from '../new-account/new-account'
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  public user ={};
  public myPersonne = {};

  public  mdp= "cc" ;
  public requete : string;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.requete = "User/USERPN/admin/Password" ;
    const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
    PassRef.on('value',PassSnapshot=>{
      this.mdp = PassSnapshot.val(); 
    });
  }
  
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
        duration: 5000
    });
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
    loading.present();
}

  login(Username: string, password: string){
    this.requete = "User/USERPN/"+Username+"/Password" ;
   
    const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
    
    PassRef.on('value',PassSnapshot=>{
      this.mdp = PassSnapshot.val(); 
      if (this.mdp.toString() == password){    
        this.presentLoadingCustom();    
          this.navCtrl.setRoot('MenuPage',{IDUSER : Username, ACTION : 1}); 
      } 
    });  
}

New(){
    this.navCtrl.setRoot('NewAccountPage');
  }

}


