import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private apiService : ApiService) { }
  username = "Thomas";
  password = 123;
  token = '';
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.apiService.connexion(this.username,this.password).subscribe(data=> this.token = data.headers.get('token'));
  } 

}
