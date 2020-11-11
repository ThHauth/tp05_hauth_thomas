import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Client } from '../client';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  apiUrl = 'http://localhost:8080/'
  productsArray : Product[];
  constructor(private http:HttpClient) { }
    public getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backendProduct);
    }

    public connexion(_username,_password){

      let body = new URLSearchParams();
      body.set('username', _username);
      body.set('password', _password);
      return this.http.post(this.apiUrl+"connexion", body.toString(),{ headers: { 'content-type': 'application/x-www-form-urlencoded' }, observe: 'response' });
    }

    public addUser(user:Client){
      let body = new URLSearchParams();
      body.set('nom',user.nom);
      body.set('prenom',user.prenom);
      body.set('civilite',user.civilite);
      body.set('adresse',user.adresse);
      body.set('codePostal',user.codePostal);
      body.set('ville',user.ville);
      body.set('pays',user.pays);
      body.set('tel',user.tel);
      body.set('username',user.username);
      body.set('motDePasse',user.motDePasse);
      body.set('mail',user.mail);
      

      return this.http.post<Client>(this.apiUrl+"createUser", body.toString(),{ headers: { 'content-type': 'application/x-www-form-urlencoded' }, observe: 'response' });
    }
    

    
}
