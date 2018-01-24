
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

export class Repas{
/* Informations relatives au repas : */
    private intitule : string; 
    private myDate : string;
    private lieu : string; 
    private participation : Number; 
    private entree : string;
    private plat: string;
    private dessert: string;
    private nbPart : number;
    private idRepas : number;

/* Création de la requete d'envoi */
    // private requete : string;
    private ref : firebase.database.Reference;

/* information sur l'annonceur du repas */
    private name : string;

/* Constructeur de l'objet repas */
    constructor(I :string,  D : string, L : string, p :Number, e : string, plat: string, d: string,nB : number, nom : string){
        this.myDate = D;
        this.lieu = L;
        this.participation = p;
        this.entree = e;
        this.plat = plat;
        this.dessert = d;
        this.intitule = I;
        this.nbPart = nB;

        this.idRepas = Math.random()*100000000000000000;
        this.name = nom;
    }

/* Méthode de mise en ligne d'un nouveau repas */
    send(){
        this.ref = firebase.database().ref(`/Annonces/Repas/` +this.idRepas );  
            this.ref.set({
                "intitulé" : this.intitule, "date" : this.myDate, "lieu" : this.lieu, 
                "participation" : this.participation, "entrée" : this.entree,
                "plat" : this.plat, "dessert" : this.dessert, "nombre de participant" : this.nbPart,
                "nom" : this.name
        });
    }


        
}