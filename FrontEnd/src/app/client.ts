export class Client {
    nom:string;
    prenom:string;
    adresse:string;
    codePostal:string;
    tel:string;
    ville:string;
    pays:string;
    mail:string;
    civilite:string;
    username:string;
    motDePasse:string;
    formatTel:string;

    constructor(nom?:string,prenom?:string,adresse?:string,cp?:string,tel?:string,ville?:string,pays?:string,email?:string,civilite?:string,login?:string,password?:string){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.codePostal = cp;
        this.ville = ville;
        this.pays = pays;
        this.mail = email;
        this.civilite = civilite;
        this.username = login;
        this.tel = tel;
        this.motDePasse = password;
    }
}
