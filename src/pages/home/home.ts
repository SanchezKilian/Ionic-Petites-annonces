import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase';
import { NewAccountPage } from '../new-account/new-account'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user ={};
  public myPersonne = {};

  public  mdp : string ;
  public requete : string;

  constructor(public navCtrl: NavController) {
 
  }

  
  login(Username: string, password: string){
    this.requete = "User/"+Username+"/Password" ;
    
    const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
    
    this.mdp = "cc";

    PassRef.on('value',PassSnapshot=>{
      this.mdp = PassSnapshot.val(); 
    });

    
    if (this.mdp.toString() == password){

        
        this.navCtrl.setRoot('MenuPage',{IDUSER : Username});
       
        
    }
 
}



New(){
    this.navCtrl.setRoot('NewAccountPage');
  }

}





    /*
    const personRefTemp: firebase.database.Reference = firebase.database().ref(`/UserTemp/`+Username); 
    personRefTemp.set({ Password });
    personRefTemp.on('value', personSnapshot => { this.myPersonne = personSnapshot.val(); });
     */
    /*
    const personRef: firebase.database.Reference = firebase.database().ref(`/User/`+Username+`/Password`);
    personRef.on('value', personSnapshot => { this.user = personSnapshot.val(); });
    
    
    this.mdp2 = `https://projetz-603d4.firebaseio.com/User/`+Username+`/`+Password;
*/

