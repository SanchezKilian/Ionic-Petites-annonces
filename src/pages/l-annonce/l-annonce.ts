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
  public idPosteur :string;
  public name : string;
  public requete : string;
  public id : string ; 
  public reference : string;
  public type = "1" ;
  public newID ;
  public itemCpl;
  public titre;
  public IDAnnonce;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.idUser = navParams.get("IDUSER")

    
    this.itemCpl = this.navParams.get("ITEM");
    this.idPosteur = this.navParams.get("OBJ");
    this.IDAnnonce = this.navParams.get("IDANNONCE");
    this.titre = this.navParams.get("TITRE");
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

              
             
                this.requete = "User/USERPN/"+this.idUser+"/ID" ;
              
              
              
              const PassRef : firebase.database.Reference = firebase.database().ref(this.requete);
              
              
          
              PassRef.on('value',PassSnapshot=>{
                this.id = PassSnapshot.val(); 
              });




              
              this.newID = Math.random()*100000000000000000;
              const personRefTemp: firebase.database.Reference = 
              firebase.database().ref(`/User/USERPI/`+this.idPosteur+'/RepAnnonce/'+this.IDAnnonce +'/info' ); 
              personRefTemp.set({IdAnnonce : this.IDAnnonce, Titre : this.titre}); // mail
              const personRef: firebase.database.Reference = 
              firebase.database().ref(`/User/USERPI/`+this.idPosteur+'/RepAnnonce/'+this.IDAnnonce + '/Demandeur/' + this.idUser  );  
              personRef.set({NOM : this.idUser,MAIL : mail}); // mail
              this.navCtrl.setRoot('MenuPage',{IDUSER : this.idUser, ACTION : 3});
            }
          }
      ]
    });
    confirm.present();
  }
}
