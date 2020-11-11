import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filter:string;
  console:string = "Tout";
  disp:string = "Tout";
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  notifyDisp:EventEmitter<number> = new EventEmitter<number>();

  @Output()
  notifyText:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  ConsoleSearch(){   
    this.notify.emit(this.console);    
  }

  TextSearch(){
    this.notifyText.emit(this.filter); 
  }

  DisponibilitySearch(){
    let res:number;

    switch(this.disp){
      case "Tout":
        res = 0;
      break;
      case "En stock":
        res = 1;
      break;
      case "Indisponible":
        res = 2;
      break;
    }
    
    this.notifyDisp.emit(res);
  }

}
