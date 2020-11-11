import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Client } from '../client';
import  countries  from '../_files/Coutries.json'
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  
  user:Client;
  postUser:Client;
  form:FormGroup;
  phoneFormat:string;
  valid:boolean;
  public countryList:any = countries;
  constructor(private apiService : ApiService) { 
    
  }


  ngOnInit(): void {
    this.user = new Client();
    this.postUser = new Client();
    this.user.civilite = "Madame";
    this.user.pays = "Afghanistan"
  }


  onSubmit() {
    this.getDialCode();

    if(this.testAllFields()){
      this.apiService.addUser(this.user).subscribe( data =>{ 
        this.postUser.nom = data.body.nom;
        this.postUser.prenom = data.body.prenom;
        this.postUser.civilite = data.body.civilite;
        this.postUser.adresse = data.body.adresse;
        this.postUser.codePostal = data.body.codePostal;
        this.postUser.ville = data.body.ville;
        this.postUser.pays = data.body.pays;
        this.postUser.tel = data.body.tel;
        this.postUser.username = data.body.username;
        this.postUser.motDePasse = data.body.motDePasse;
        this.postUser.formatTel = this.user.formatTel;
        this.postUser.mail = data.body.mail;
      });
      this.valid = true;

    }
    else{
        alert("Certains champs ne sont pas valides");
    }
    

  } 

  getDialCode():string{
    let res:string = "";
    countries.forEach(element => {
      if(element.name === this.user.pays){        
        this.user.formatTel = element.dial_code;
      }
    });
    return res;
  }
  getActualCountry(e:any){
    this.user.pays = e.target.value;
  }

  testAllFields():boolean{
    let test = true;

    var nameRegex = /[^0-9]{2,30}/g
    var fornameRegex = /[^0-9]{2,30}/g
    var addressRegex = /.{6,}/g
    var zipRegex = /[0-9]{5}/g
    var cityRegex = /[^0-9]{1,60}/g
    var loginRegex = /.{5,}/g
    var passwordRegex = /.{8,}/g
    var mailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g

    test = this.checkField(this.user.nom,nameRegex);
    test = this.checkField(this.user.prenom,fornameRegex);
    test = this.checkField(this.user.adresse,addressRegex);
    test = this.checkField(this.user.codePostal,zipRegex);
    test = this.checkField(this.user.ville,cityRegex);
    test = this.checkField(this.user.username,loginRegex);
    test = this.checkField(this.user.motDePasse,passwordRegex);
    test = this.checkField(this.user.mail,mailRegex);

    return test;
  }


  checkField(value: string, regex: any):boolean {
    return (regex.test(value) && value !== "");
}

}
