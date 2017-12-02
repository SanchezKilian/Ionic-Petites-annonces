import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the NewAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  public  id ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAccountPage');
  }

  create(Username : string, Password : string, PasswordVerif){
   
    if(Password == PasswordVerif){
      const personRefTemp: firebase.database.Reference = firebase.database().ref(`/User/USERPN/`+Username); 
      this.id = Math.random()*100000000000000000;
      personRefTemp.set({Password: Password,ID : this.id });
      
      const personRef: firebase.database.Reference = firebase.database().ref(`/User/USERPI/`+this.id); 
      personRef.set({Password: Password, Name:Username});
      this.navCtrl.setRoot('MenuPage');
    }

    
     

  }

}
