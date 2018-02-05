import firebase from 'firebase';

class User{
/* Information sur l'user */
    private identifiant : string;
    private nom : string;
    private prenom : string;
    private password : string;
    private mail : string;

/* Requetes et réferences pour la communication serveur */
    private requete : string;
    private ref : firebase.database.Reference;

/* Constructeur */ 
    /* On ne peut créer un objet avec se constructeur que si toutes les informations sont présentes sur la base de données
       pour créer un nouvelle utilisateur, se réferer à la fonction createNewUser().
    */
    constructor(id : string, mdp : string){

    }

/* Creation d'un nouvel utilisateur, cad insertion des données sur le serveur */
    createNewUser(){
        
    }


/* retourne la liste des annonces posté par l'utilisateur actuel */
    getAnnonces(){

    }

/* Retourne la liste des personne interessés pour une certaine annonces posté par l'utilisateur actuel */
    getInterest(idAnnonce : string){

    }

/*  envoie du mail  à la créaion du compte */
    sendMail(){
        
        this.mail = this.prenom + "." + this.nom + "@univ-lemans.fr";
        
    }
}