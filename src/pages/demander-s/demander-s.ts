import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DemanderSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demander-s',
  templateUrl: 'demander-s.html',
})
export class DemanderSPage {
  public idUser : string;
  public identifiant :string ;
  public requete : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.idUser = navParams.get("IDUSER");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemanderSPage');
  }
  Valider(rubrique :string ,titre : string,description:string ){
/*////////////////////////////////////////////////////////////////*/
this.requete = "User/USERPN/"+this.idUser+"/ID" ;

const newRef : firebase.database.Reference = firebase.database().ref(this.requete);
newRef.on('value',newSnapshot=>{
  this.identifiant = newSnapshot.val(); 
});



/*////////////////////////////////////////////////////////////////*/
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
          text:'poster',
          handler : ()=>{
            
            this.requete = "User/USERPN/"+this.idUser+"/ID" ;
            
            const newRef : firebase.database.Reference = firebase.database().ref(this.requete);
            newRef.on('value',newSnapshot=>{
              this.identifiant = newSnapshot.val(); 
            });
            
            var idAnnonce ;
            idAnnonce = Math.random()*100000000000000000;
           

            var slash = `/`;
            const personRefTemp: firebase.database.Reference = 
            firebase.database().ref(`/Annonces/Demander`  +slash+ rubrique + slash + idAnnonce);  // ajouter  id user
            personRefTemp.set({titre,description,ID :this.identifiant, IDAnnonce :idAnnonce,rubrique : rubrique });
            const personRefL: firebase.database.Reference = 
            /*firebase.database().ref(`/Annonces/last/` +idAnnonce );  
            personRefL.set({titre,description,ID :this.identifiant, IDAnnonce :idAnnonce, type : "Demander", rubrique });*/
            firebase.database().ref(`/Annonces/last/`+ rubrique);  
            personRefL.set({titre,description,ID :this.identifiant, IDAnnonce :idAnnonce});
           
                
                
            this.navCtrl.setRoot('MenuPage',{IDUSER : this.idUser, ACTION : 4, ANNONCE : titre}); //,{IDUSER : this.idUser}


            
          }
        }
    ]
  });
    confirm.present();


  }


  


}
