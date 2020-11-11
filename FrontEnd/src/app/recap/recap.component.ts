import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
