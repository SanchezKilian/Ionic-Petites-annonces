import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the LAnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-l-annonce',
  templateUrl: 'l-annonce.html',
})
export class LAnnoncePage {

  public idUser : string;
  private idPosteur :string;
  public name : string;
  public requete : string;
  public id : string ; 
  public reference : string;
  public type = "1" ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.idUser = navParams.get("IDUSER")

    this.idPosteur = this.navParams.get("OBJ");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LAnnoncePage');
  }

  send(mail : string){
    let confirm = this.alertCtrl.create({
      title : "Cet E-mail va être envoyé au propriétaire de l'annonce \n (cet E-mail ne sera pas conservé)",
      message : " E-mail :  " +mail ,
      buttons:[
          {
            text:'Modifier',
            handler : ()=>{
            }
          },
          {
            text:'valider',
            handler : ()=>{

              var slash = `/`;
             
                this.requete = "Annonce/Demander/"+this.idUser+"/ID" ;
              
              
              
              const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
              
              this.id= "cc";
          
              PassRef.on('value',PassSnapshot=>{
                this.id = PassSnapshot.val(); 
              });




              this.name = this.idPosteur.toString();
              const personRefTemp: firebase.database.Reference = firebase.database().ref(`/User/`+this.name.toString()); 
              personRefTemp.set({mail});
              this.navCtrl.push('MenuPage',{IDUSER : this.idUser});
            }
          }
      ]
    });
    confirm.present();
  }
}