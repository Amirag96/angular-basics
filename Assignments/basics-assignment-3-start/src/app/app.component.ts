import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hidden = false;
  logs: string[]=[];
  onButtonClick(){
    this.hidden= this.hidden === false? true:false;
    this.logs.push(new Date().toISOString());
  }
}

