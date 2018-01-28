import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

class Annonce{
/* Information liées à l'annonce */
    private categorie : string;
    private rubrique : string;
    private titre : string;
    private description : string;
    private IDposteur : string;
    private IDAnnonce : number;

/* Construction de la requete */
    private requete : string;  // pour récuperer l'id du posteur
    private ref :  firebase.database.Reference;
    private refLast : firebase.database.Reference;
    private slash = "/";

/* Constructeur de la classe Annonce */
    constructor(Cat : string, rub : string, ti : string, desc : string, IDP : string){
        this.categorie = Cat;
        this.rubrique = rub;
        this.titre= ti;
        this.description = desc;
        this.IDposteur = IDP;
        this.IDAnnonce =  Math.random()*100000000000000000;
    }

/* Envoie de l'annoce au serveur */
    send(){
        this.ref = firebase.database().ref(`/Annonces/`+ this.categorie  +this.slash+ this.rubrique + this.slash + this.IDAnnonce);  
        this.ref.set({titre : this.titre,description : this.description,ID :this.IDposteur, IDAnnonce :this.IDAnnonce,rubrique : this.rubrique });
        this.refLast = firebase.database().ref(`/Annonces/last/`+ this.rubrique);  
        this.refLast.set({titre : this.titre, description : this.description,ID :this.IDposteur, IDAnnonce :this.IDAnnonce});
    }

    
}