import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ProposerSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proposer-s',
  templateUrl: 'proposer-s.html',
})
export class ProposerSPage {
  public Username : string;
  public id : string;
  public requete : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.Username = navParams.get("IDUSER");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposerSPage');
  }

  Valider(rubrique :string ,titre:string,description:string ){
    /*/////////////////////////////////////////////////*/
    this.requete = "User/USERPN/"+this.Username.toString()+"/ID" ;
    
    const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
    
    PassRef.on('value',PassSnapshot=>{this.id = PassSnapshot.val(); });
     /*/////////////////////////////////////////////////*/
    let confirm = this.alertCtrl.create({
      title : "Poster cette annonce ?",
      message : " rubrique : " + rubrique +" \n description = " + description,
      buttons:[
          {
            text:'Modifier',
            handler : ()=>{
            }
          },
          {
            text:'valider',
            handler : ()=>{
              
              this.requete = "User/USERPN/"+this.Username.toString()+"/ID" ;
              
              const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
              
              PassRef.on('value',PassSnapshot=>{this.id = PassSnapshot.val(); });
              
                
             var idAnnonce ;
             idAnnonce = Math.random()*100000000000000000;
  
              var slash = `/`;
              const personRefTemp: firebase.database.Reference = 
              firebase.database().ref(`/Annonces/Proposer`  +slash+ rubrique + slash + idAnnonce);  
              personRefTemp.set({titre,description,ID :this.id, IDAnnonce :idAnnonce});
              const personRefE: firebase.database.Reference = 
              firebase.database().ref(`/Annonces/last/`+ rubrique);  
              personRefE.set({titre,description,ID :this.id, IDAnnonce :idAnnonce});
                  
              this.navCtrl.setRoot('MenuPage',{IDUSER : this.Username, ACTION : 4, ANNONCE : titre}); //,{IDUSER : this.idUser}
  
            }
          }
      ]
    });
    confirm.present();



    
  }
}
